const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
app.use(express.static(path.resolve('./dist')));
/*
 * Set-up all routes for 'index.html' file
 */
app.get('*', function(req, res){
  res.sendfile(path.resolve('./dist/index.html'));
});
/*
 * Take port from arguments or set-up default 8080
 */
const Port = process.env.PORT || 8080;

/*
 * Function to handle socket connection event 
 */
io.on('connection', function(socket){

  /*
   * Handle 'test' message name 
   */
  socket.on('test',(data) => {

    /*
     * When get 'test' from client, send 'test' to this client with the same data and 'time' attribute 
     */
    io.emit('test',{...data, time:Date.now()})

  })
  
});


/*
 * Run server 
 */
http.listen(Port, function(){
  console.log(`listening on ${Port}`);
});