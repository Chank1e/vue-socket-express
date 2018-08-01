<template>
  <div class="flex">
    <div class="flex-item">
        <h4>Type:</h4>
        <input type="text" id="type" v-model="type">
        <h4>Data:</h4>
        <input type="text" id="data" v-model="data">
        <br>
        <button id="send" @click="emitForm()">Send</button>
    </div>
    <div class="flex-item">
      <h4>Response:</h4>
      <textarea id="area" cols="45" rows="10">
        {{area}}
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    area: null,
    type: '',
    data: ''
  }),
  mounted(){
    /*
    * Emit object {hello:'world'} to server with name 'test'
    */
    this.emit('test',{hello:'world'});

    /*
    * Adding handler for message from socket named 'test'
    */

    this.on({
      type:'test',
      cb:(msg)=>{
        console.log(msg)
      }
    });
  },
  methods:{
    /*
    * Wrapper for socket.emit action
    */
    emit(type,data){ 
      this.$store.dispatch('socket.emit',{type, data})
    },
    /*
     * Wrapper for socket.on action
     */
    on(type){
      return this.$store.dispatch('socket.on',type);
    },
    emitForm(){
      this.emit(this.type, this.data)
    }
  }
}
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
#area {
  resize:vertical;
}
</style>

