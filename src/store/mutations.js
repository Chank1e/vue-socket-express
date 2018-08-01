const Mutations = {
    /**
     * 
     * @param {any} payload - setting up new Socket instance
     */
    setSocket(state,payload){
        for(let key in payload){
            if(Object.getOwnPropertyNames(state.Socket).includes(key))
                state.Socket[key] = payload[key];
        }
            
    }
};

export default Mutations;
