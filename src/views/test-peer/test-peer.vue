<template>
  <div>
	<b>your id:</b> {{ key }}
	<div v-if="!isConnected">
		<br><br>
		<input type="text" v-model="connectToKey">
		<a @click="connect">Connect</a>
	</div>
	<div v-if="isConnected">
		<br><br>
		<textarea v-model="text"></textarea> 
		<a @click="send">Send</a>
		<ul>
			<li v-for="message in messages">
				<b>{{ message.user }}:</b> <span>{{ message.text }}</span>
			</li>
		</ul>
	</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PeerChannel, Message, MessageType } from '@/services/peer-channel'

@Component
export default class TestPeer extends Vue {

	messages: any[] = []
	text: string = ''

	peerChannel: PeerChannel
	isConnected = false

	key: string = Math.random().toString(36).substring(7)
	connectToKey: string = ''

	mounted() {
		this.peerChannel = new PeerChannel(
			this.key, 
			this.onMessageReceived,
			this.onPeerConnected
		)
	}

	onPeerConnected(connection: any) {
		this.isConnected = true
		this.messages.push({ user: connection.peer, text: "has connected" })
	}

	onMessageReceived(connection: any, message: Message) {
		this.messages.push({ user: connection.peer, text: message.data })
	}

	async connect() {
		try {
			await this.peerChannel.connect(this.connectToKey)
			this.isConnected = true
			this.messages.push({ user: 'You', text: 'have connected to ' + this.connectToKey })
		}
		catch (e) {
			this.isConnected = false
		}
	}

	send() {
		this.messages.push({ user: 'you', text: this.text })
		this.peerChannel.broadcast(new Message(MessageType.foo, this.text))
		this.text = ''
	}
}
</script>

<style lang="stylus" scoped>

</style>
