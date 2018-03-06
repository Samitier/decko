<template>
  <div>
	<b>your id:</b> {{ key }}
	<div v-if="!connection">
		<br><br>
		<input type="text" v-model="connectToKey">
		<a @click="connect">Connect</a>
	</div>
	<div v-if="connection">
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
const Peer = require('peerjs')

@Component
export default class TestPeer extends Vue {

	peer: any
	connection: any = null
	messages: any[] = []

	user: string = ''
	text: string = ''

	key: string = Math.random().toString(36).substring(7)
	connectToKey: string = ''

	mounted() {
		this.peer = new Peer(
			this.key, 
			{ host: location.hostname, port: location.port, path: '/peer' }
		)
		this.peer.on('connection', (conn: any) => {
			this.connection = conn
			this.connection.on('data', (data: any) => this.messages.push(data))
		})
	}

	connect() {
		this.connection = this.peer.connect(this.connectToKey)
		this.connection.on('open', () => {
			this.messages.push({ user: "you", text: "have connected" })
			this.connection.on('data', (data: any) => this.messages.push(data))
			this.connection.send({ user: this.key, text: "has connected" })
		})
	}

	send() {
		this.messages.push({ user: "you", text: this.text })
		this.connection.send({ user: this.key, text: this.text })
		this.text = ''
	}
}
</script>

<style lang="stylus" scoped>

</style>
