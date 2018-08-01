import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from './state';
import mutations from './mutations';
import actions from './actions';

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters:{
        /**
         * @returns {Object} - Object which contains last request data and type
         */
        lastRequest:state=>state.Socket.lastRequest,
        
        /**
         * @returns {Object} - Object which contains last response data and type
         */
        lastResponse:state=>state.Socket.lastResponse,
    }
})