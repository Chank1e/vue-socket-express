import Socket from 'socket.io-client/dist/socket.io.js';

const Actions = {
    /**
     * Emit default socket.emit action and send it to backend server with provided data
     * @param {Object} payload - should be type attribute which includes name of the message; data attribute should include data for socket
     */
    ['socket.emit']({ state, commit }, payload){
        const { Socket:S } = state,
              { instance:Socket } = S,
              Type = payload.type?payload.type:'',
              Data = payload.data?payload.data:{};

        Socket.emit(Type, Data);
        commit('setSocket',{lastRequest:{
            type:Type,
            data:Data
        }});
        
    },
    /**
     * Initializing of the socket connection via socket.io library
     */
    ['socket.init']({ commit, state }){
        commit('setSocket',{
            instance: Socket(),
        })
        
    },
    /**
     * 
     * @param {string} type - message name to add listener for
     * @param {function} cb - callback which would be called with every .on event
     */
    ['socket.on']({ commit, state },{type, cb}){
        const { Socket:S } = state,
              { instance:Socket } = S;
        Socket.on(type,(msg)=>{
            cb(msg);
            commit('setSocket',{lastResponse:{
                type,
                data:msg
            }});
        })
    }
};

export default Actions;