<template>
  <div :class="[colClass]">
    <div class="card mb-6 shadow-sm">
      <div v-if="showTitle" class="d-flex justify-content-between align-items-center">
        <span class="btn btn-block title">
          0/0
        </span>
      </div>
      <img :src="imgPath" class="img_view" width="100%">
    </div>
  </div>

</template>

<script>
export default {
  name: 'RawImg',
  props: ['rawPath'],
  computed: {
    showTitle: function () {
      return this.$store.state.notateType !== 'ATTRIBUTE'
    },
    colClass: function () {
      let type = this.$store.state.notateType
      if (type === 'RETARGETING') {
        return 'col-md-3'
      } else if (type === 'ATTRIBUTE') {
        return 'col-md-5'
      } else {
        return 'col-md-3'
      }
    },
    imgPath: function () {
      try {
        if (this.rawPath === undefined || this.rawPath.length === 0) {
          return ''
        }
        let imgPath = this.rawPath.replace(/&/g, '%26')
        let url = this.$store.state.imgUrl + this.$store.state.rootPath + imgPath
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
  .title{
    font-size: large;
  }
</style>
