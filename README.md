# Simpliest Vue+Express+Socket.io boilerplate
> A Vue.js project with Express server and some VueX actions to prototype Vue+Express+Socket.io apps. 
## Clone
``` bash
git clone https://github.com/Chank1e/vue-socket-express.git
```
## Build/Setup

``` bash
# install dependencies
npm install || yarn

# build Vue
npm run build || yarn build

# build Vue with watch
npm run build:watch || yarn build:watch

#run Express server to server Vue
npm run start || yarn start

#run server with Nodemon
npm run start:watch || yarn start:watch
```

## VueX actions
### socket.init
> Action to create instance of socket.io object in `state.Socket.instance`;
``` javascript
this.$store.dispatch('socket.init');

```
### socket.emit
> Vanilla `emit` from socket.io;
``` javascript
const emitObject = {
    type:'test', // type is an event name for socket.io on the server-side
    data:{       // just data which you want to send to the server
        lorem:'ipsum',
        PI:Math.PI,
        arr:[1,3,4,5]
    }
}
this.$store.dispatch('socket.emit',emitObject);
```

### socket.on
> Vanilla `on` from socket.io;
``` javascript
const onObject = {
    type:'test',                // type is an event name which you would like to watch
    cb: msg => console.log(msg) // callback function
}
this.$store.dispatch('socket.on',onObject);
```

### lastRequest && lastResponse
> Every tick you can get `lastRequest` from `this.$store.getters.lastRequest` and `lastResponse` from `this.$store.getters.lastResponse`;

Built on the top of default vue-webpack template;
