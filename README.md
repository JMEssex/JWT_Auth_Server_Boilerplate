# JWT-Auth Serverside Boilerplate

Simple boilerplate for server side project authentication.

### Getting Started

Checkout this repo, install dependencies, create a config.js file, then start the dev process with the following:

```
> git clone https://github.com/JMEssex/JWT_Auth_Server_Boilerplate.git
> cd JWT_Auth_Server_Boilerplate
> touch config.js
> npm install
> npm run dev
```

### Inside your config.js file
config.js is listed in your .gitignore file. Make sure that you setup your file as follows:

```
// Hold application secrets and config
module.exports = {
	secret: '<Enter Random String Here>'
}
```

