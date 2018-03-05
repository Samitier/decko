const   express = require("express"),
		http = require("http"),
		path = require("path"),
		compression = require('compression')

class Server {

    constructor() {
        this.init()
    }

    init() {
		const port = process.env.PORT || 3000
		this.app = express()
		// Gzip
		this.app.use(compression())
        // Setting the static file server to the folder "public"
        this.app.use(express.static(path.join(__dirname, "../dist")))
        this.app.use(
            (req, res) => res.sendFile(path.join(__dirname, "../dist/index.html"))
        )
        this.app.set('port', port)
        let server = http.createServer(this.app)
        server.listen(port)
        server.on(
            "listening",
            () => console.log("Server listening on port " + port)
        )
    }
}

const server = new Server()
