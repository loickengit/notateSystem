<template>
  <div id="app">
    <router-view ref="child"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    window.addEventListener('keyup', e => {
      if (e.keyCode === 32) {
        this.$refs.child.nextTask()
      } else if (e.keyCode === 70 || e.keyCode === 102) {
        this.$refs.child.previousTask()
      }
    })
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: #f0f0f0;
  }
</style>
