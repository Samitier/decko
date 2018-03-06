const 	express = require("express"),
		http = require("http"),
		path = require("path"),
		compression = require("compression"),
		expressPeerServer = require("peer").ExpressPeerServer

const { ENV, PORT } = process.env

class Server {

	constructor() {
		this.init()
	}

	init() {
		const 	app = express(),
				server = http.createServer(app)
		// Gzip
		app.use(compression())
		// Setting the static file server to the folder "public"
		app.use(express.static(path.join(__dirname, "../dist")))
		// Setting up peer server
		app.use("/peer", expressPeerServer(server, { debug: ENV !== "production" }))
		// Return index.html instead on 404
		app.use((req, res) => res.sendFile(path.join(__dirname, "../dist/index.html")))
		server.listen(PORT || 3000)
			.on(
				"listening",
				() => console.log("Server listening on port " + (PORT || 3000))
			)
	}
}

new Server()
