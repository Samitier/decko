const Peer = require('peerjs')

enum PeerEvent {
	connection = 'connection',
	open = 'open',
	close = 'close',
	data = 'data',
	error = 'error'
}

export class Message {
	constructor(
		public type: MessageType,
		public data: any
	) {}
}

export enum MessageType {
	channelMembers,

	foo
}

export class PeerChannel {

	private readonly serverPath = '/peer'
	private peer: any
	private connections: Map<string, any> = new Map()

	constructor (
		private key: string, 
		private onMessageReceivedCb: Function,
		private onPeerConnected: Function
	) {
		this._initPeer()
	}

	connect (key: string): Promise<any> {
		const connection = this.peer.connect(key)
		return new Promise((resolve, reject) => {
			connection.on(PeerEvent.open, () => {
				// Set listener for incoming responses
				connection.on(
					PeerEvent.data, 
					(message: string) => this._onMessageReceived(connection, message)
				)
				// Saving the connection
				this.connections.set(key, connection)
				resolve(connection)
			})
			connection.on(PeerEvent.error, (error: any) => reject(error))
		})
	}

	broadcast (message: Message) {
		this.connections.forEach((connection: any) => {
			this._send(connection, message)
		})
	}

	private _initPeer() {
		this.peer = new Peer(
			this.key,
			{ host: location.hostname, port: location.port, path: this.serverPath }
		)
		this.peer.on(PeerEvent.connection, (connection: any) => {
			// Sending ids of the rest of the channel members
			const message = new Message(MessageType.channelMembers, [ ...this.connections.keys()])
			this._send(connection, message)
			// Set listener for incoming messages
			connection.on(
				PeerEvent.data, 
				(message: string) => this._onMessageReceived(connection, message)
			)
			// Saving connection
			this.connections.set(connection.peer, connection)
			// On new connection callback
			this.onPeerConnected(connection)
		})
		this.peer.on(PeerEvent.error, (data: any) => console.error(data))
	}

	private _send(connection: any, message: Message) {
		connection.send(JSON.stringify(message))
	}

	private _onMessageReceived (connection: any, messageStr: string) {
		const message = JSON.parse(messageStr)
		if (message.type === MessageType.channelMembers) {
			return this._connectToChannelMembers(message.data)
		}
		this.onMessageReceivedCb(connection, message)
	}

	private _connectToChannelMembers(keys: string[]) {
		for (const key of keys) {
			if (key === this.key || this.connections.has(key)) continue
			this.connect(key)
		}
	}
}