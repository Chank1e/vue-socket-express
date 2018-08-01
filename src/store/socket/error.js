const TYPES = {
    1:'NO_CONNECTION',
    2:'SEND_PAYLOAD_IS_NOT_AN_OBJECT'
};


function SocketError(code){
    this.code = code;
    if(TYPES[code])
        this.type = TYPES[code];
    return this;
}


export default SocketError;