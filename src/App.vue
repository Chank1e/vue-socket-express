<template>
    <router-view/>
</template>

<script>
export default {
  name: 'App',
  created(){
    // Initializing of the socket. Connecting to backend
    this.$store.dispatch('socket.init')
  }
}
</script>
