<template>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <div class="d-flex">
        <button v-on:click="notateImg" :class="['btn', 'btn-block', this.status === 'GOOD' ? 'btn-info' : '']">好</button>
        <button v-on:click="notateImg" :class="['btn', 'btn-block', this.status === 'BAD' ? 'btn-info' : '']">不好</button>
      </div>
      <img :src="imgPath" width="100%">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyImg',
  props: ['path', 'index', 'status'],
  methods: {
    notateImg (event) {
      let text = event.target.innerHTML
      if (text === '好') {
        this.status = 'GOOD'
      } else {
        this.status = 'BAD'
      }
      this.$parent.$emit('notate', this.index, this.status)
    }
  },
  computed: {
    imgPath: function () {
      try {
        if (this.path.length === 0) {
          return ''
        }
        let imgPath = (this.$store.state.rootPath + this.path).replace(/&/g, '%26')
        let url = this.$store.state.imgUrl + imgPath
        return url
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
  .img_view {
    cursor: pointer;
  }
</style>
