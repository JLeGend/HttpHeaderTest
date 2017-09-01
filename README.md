# HttpHeaderTest
Try to dive deeper into each http headers' functionalities

Environment:
  Server: Node.js -> Express.js
  Operation system: macOS Sierra v10.12.1
  Browser: Firefox 54.0.1(64-bit), Chrome 60.0.3112.113 (Official Build) (64-bit)
	
There are three path defined in server script, trying to compare no-cache, no-store and must-revalidate's behavior on different browsers.

For Mac user, first install node.js

	brew install node
	
Once you install node.js, you need to install npm and other two modules, Express.js and express-cache-response-directive.

	brew install npm
	
	npm install express
	
	npm install express-cache-response-directive

After that, you would be able to run the file

	node server.js
	
The result is interesting. no-store actually means no-cache, while no-cache means no-cache + must revalidate + max-age=0
