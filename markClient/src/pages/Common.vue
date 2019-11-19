<template>
  <div>
    <navbar :cur="curPg" :total="count"/>
    <div class="jumbotron text-center">
      <div class="row">
        <RawImg :rawPath="raw"></RawImg>
        <div class="row col-md-9" style="padding-left: 70px">
          <MyImg
            v-for="(image, index) in results"
            :key="index"
            :index="index"
            :path="image.path"
            :status="image.status"
          ></MyImg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import notateAPI from '@/api/NotationAPI'

import navbar from '@/components/Navbar'
import RawImg from '@/components/RawImg'
import MyImg from '@/components/MyImg'
export default {
  name: 'common',
  components: {
    navbar,
    RawImg,
    MyImg
  },
  data () {
    return {
      count: 0,
      sample: {
        images: []
      }
    }
  },
  methods: {
    notateCommon (index, status) {
      this.sample.images[index + 1].status = status
    },
    nextTask () {
      if (!this.check()) {
        alert('图片没有完全标注')
        return
      }
      let sequenceNum = this.sample.sequenceNum
      this.getTask(sequenceNum + 1)
    },
    previousTask () {
      let sequenceNum = this.sample.sequenceNum
      if (sequenceNum <= 1) {
        return
      }
      this.getTask(sequenceNum - 1)
    },
    check () {
      for (let img of this.sample.images.slice(1)) {
        if (img.status === 'DEFAULT') {
          return false
        }
      }
      return true
    },
    getTask (sequenceNum) {
      this.submmit().then(res => {
        let username = this.$store.state.username
        let notateType = this.$store.state.notateType
        notateAPI.getSample(username, sequenceNum, notateType).then(res => {
          if (res.data.sequenceNum > 0) {
            this.sample = res.data
            this.count = Math.max(this.count, this.sample.sequenceNum)
          }
        })
      })
    },
    submmit () {
      return notateAPI.submmitNotation(this.sample)
    }
  },
  computed: {
    raw: function () {
      let r = this.sample.images[0]
      return r ? r.path : ''
    },
    results: function () {
      return this.sample.images.slice(1)
    },
    curPg: function () {
      return this.sample.sequenceNum
    }
  },
  created () {
    this.$on('notate', (index, status) => {
      this.notateCommon(index, status)
    })
    let username = this.$store.state.username
    let notateType = this.$store.state.notateType
    notateAPI.getLatestWork(username, notateType).then(res => {
      this.sample = res.data.sample
      this.count = res.data.count
    }).catch(e => {
      console.log('error ' + JSON.stringify(e))
    })
  }
}
</script>

<style scoped>

</style>
