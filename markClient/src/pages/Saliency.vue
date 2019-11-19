<template>
  <div>
    <navbar :cur="sequenceNum" :total="count"/>
    <div class="jumbotron text-center">
      <div class="row">
        <raw-img :rawPath="raw"/>
        <div class="col-md-4">
          <div class="card mb-7 shadow-sm">
            <div class="d-flex justify-content-between align-items-center">
              <span class="btn btn-block title">View</span>
            </div>
            <img :src="curPath" class="img_view" width="100%">
          </div>
        </div>
        <div class="box col-md-4 align-self-center">
          <ul>
            <li class="card mb-2 shadow-sm">
              <button id="4" v-on:click="notate" :class="['btn', 'btn-block', result === 4 ? 'btn-info' : '']">效果较好</button>
            </li>
            <li class="card mb-2 shadow-sm">
              <button id="2" v-on:click="notate" :class="['btn', 'btn-block', result === 2 || result === 3 ? 'btn-info' : '']">遗漏显著物体</button>
            </li>
            <li class="card mb-2 shadow-sm">
              <button id="1" v-on:click="notate" :class="['btn', 'btn-block', result === 1 || result === 3 ? 'btn-info' : '']">误报不显著区域</button>
            </li>
          </ul>
          <div class="mb-4" style="padding-top: 20px">
            <span style="color: gray;">说明：效果较好与(遗漏显著物体、误报不显著区域）矛盾，不可同时选</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import notateAPI from '@/api/NotationAPI'
import navbar from '@/components/Navbar'
import rawImg from '@/components/RawImg'

export default {
  name: 'Saliency',
  components: {
    navbar,
    rawImg
  },
  data () {
    return {
      count: 0,
      sample: {},
      curIndex: 0,
      sequenceNum: 0,
      result: 0,
      map: {
        'GOOD': 4,
        'MISS': 2,
        'ERROR': 1,
        'MESS_AND_ERROR': 3,
        'DEFAULT': 0
      }
    }
  },
  computed: {
    raw () {
      if (this.sample.images === undefined) {
        return ''
      }
      return this.sample.images[0].path
    },
    curPath () {
      if (this.sample.images === undefined) {
        return ''
      }
      let path = this.sample.images[this.curIndex].path
      return this.parseUrl(path)
    }
  },
  methods: {
    parseUrl (path) {
      if (path === undefined) {
        return ''
      }
      let imgPath = (this.$store.state.rootPath + path).replace(/&/g, '%26')
      let url = this.$store.state.imgUrl + imgPath
      return url
    },
    notate (event) {
      let id = event.target.id
      if (id === '4') {
        this.result = 4
      } else if (id === '1') {
        this.result = this.result === 2 ? 3 : 1
      } else if (id === '2') {
        this.result = this.result === 1 ? 3 : 2
      }
    },
    nextTask () {
      if (!this.check()) {
        return
      }
      if (this.curIndex < this.sample.images.length) {
        this.curIndex += 1
        this.loadAll()
      } else {
        let sequenceNum = this.sample.sequenceNum
        this.getTask(sequenceNum + 1)
      }
    },
    previousTask () {
      if (!this.check()) {
        return
      }
      if (this.curIndex > 1) {
        this.curIndex -= 1
        this.loadAll()
      } else {
        let sequenceNum = this.sample.sequenceNum
        if (sequenceNum <= 1) {
          return
        }
        this.getTask(sequenceNum - 1)
      }
    },
    check () {
      if (this.result === 0) {
        alert('图片没有标注')
        return false
      }
      return true
    },
    getTask (sequenceNum) {
      let username = this.$store.state.username
      let notateType = this.$store.state.notateType
      this.submmit().then(res => {
        notateAPI.getSample(username, sequenceNum, notateType).then(res => {
          if (res.data.sequenceNum > 0) {
            this.sample = res.data
            this.count = Math.max(this.count, sequenceNum)
            this.loadAll()
          }
        })
      })
    },
    loadAll () {
      let image = this.sample.images[this.curIndex]
      if (image !== undefined) {
        this.result = this.map[image.status]
      }
    },
    submmit () {
      return notateAPI.submmitNotation(this.sample)
    }
  },
  created () {
    let username = this.$store.state.username
    let notateType = this.$store.state.notateType
    notateAPI.getLatestWork(username, notateType).then(res => {
      this.sample = res.data.sample
      this.count = res.data.count
      this.curIndex = 1
      this.sequenceNum = this.sample.sequenceNum
      this.loadAll()
    }).catch(e => console.log(e))
  }
}
</script>

<style scoped>

</style>
