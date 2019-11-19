<template>
  <div>
    <navbar :cur="curPg" :total="count"/>
    <div class="row align-content-center" style="padding-left: 10%">
      <RawImg :rawPath="raw" class="jumbotron"/>
      <div class="align-content-between" style="padding-top: 3%">
        <ul class="d-flex">
          <h6 class="align-self-center mb-2 barStyle" style="padding-right: 20px">人脸</h6>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="face" id="f1" :class="['btn', 'btn-block', faceIndex === 'f1' ? 'btn-info' : '']">不包含</button>
          </li>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="face" id="f2" :class="['btn', 'btn-block', faceIndex === 'f2' ? 'btn-info' : '']">一个</button>
          </li>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="face" id="f3" :class="['btn', 'btn-block', faceIndex === 'f3' ? 'btn-info' : '']">多个</button>
          </li>
        </ul>
        <ul class="d-flex">
          <h6 class="align-self-center mb-2 barStyle" style="padding-right: 20px">人体</h6>

          <li class="card mb-2 shadow-sm">
            <button v-on:click="person" id="p1" :class="['btn', 'btn-block', personIndex === 'p1' ? 'btn-info' : '']">不包含</button>
          </li>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="person" id="p2" :class="['btn', 'btn-block', personIndex === 'p2' ? 'btn-info' : '']">一个</button>
          </li>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="person" id="p3" :class="['btn', 'btn-block', personIndex === 'p3' ? 'btn-info' : '']">多个</button>
          </li>
        </ul>
        <ul class="d-flex">
          <h6 class="align-self-center mb-2 barStyle" style="padding-right: 20px">几何特征显著物</h6>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="saliency" id="sa1" :class="['btn', 'btn-block', saliencyIndex === 'sa1' ? 'btn-info' : '']">有</button>
          </li>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="saliency" id="sa2" :class="['btn', 'btn-block', saliencyIndex === 'sa2' ? 'btn-info' : '']">没有</button>
          </li>
        </ul>
        <ul class="d-flex">
          <h6 class="align-self-center mb-2 barStyle" style="padding-right: 20px">文本</h6>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="text" id="t1" :class="['btn', 'btn-block', textIndex === 't1' ? 'btn-info' : '']">有</button>
          </li>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="text" id="t2" :class="['btn', 'btn-block', textIndex === 't2' ? 'btn-info' : '']">没有</button>
          </li>
        </ul>
        <ul class="d-flex">
          <h6 class="align-self-center mb-2 barStyle" style="padding-right: 20px">语义显著物</h6>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="semantics" id="so1" :class="['btn', 'btn-block', semanticsIndex === 'so1' ? 'btn-info' : '']">不包含</button>
          </li>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="semantics" id="so2" :class="['btn', 'btn-block', semanticsIndex === 'so2' ? 'btn-info' : '']">一个</button>
          </li>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="semantics" id="so3" :class="['btn', 'btn-block', semanticsIndex === 'so3' ? 'btn-info' : '']">多个</button>
          </li>
        </ul>
        <ul class="d-flex">
          <h6 class="align-self-center mb-2 barStyle" style="padding-right: 20px">背景占比</h6>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="backgroud" id="b1" :class="['btn', 'btn-block', backgroudIndex === 'b1' ? 'btn-info' : '']">基本没有</button>
          </li>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="backgroud" id="b2" :class="['btn', 'btn-block', backgroudIndex === 'b2' ? 'btn-info' : '']">少量</button>
          </li>
          <li class="card mb-2 shadow-sm">
            <button v-on:click="backgroud" id="b3" :class="['btn', 'btn-block', backgroudIndex === 'b3' ? 'btn-info' : '']">超过一半</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import notateAPI from '@/api/NotationAPI'
import navbar from '@/components/Navbar'
import RawImg from '@/components/RawImg'

export default {
  name: 'Attribute',
  components: {
    navbar,
    RawImg
  },
  data: function () {
    return {
      count: 0,
      sample: {attribute: {}},
      faceIndex: '',
      personIndex: '',
      personMap: {
        '不包含': 'p1',
        '一个': 'p2',
        '多个': 'p3'
      },
      saliencyIndex: '',
      saliencyMap: {
        '有': 'sa1',
        '没有': 'sa2'
      },
      textIndex: '',
      textMap: {
        '有': 't1',
        '没有': 't2'
      },
      semanticsIndex: '',
      semanticsMap: {
        '不包含': 'so1',
        '一个': 'so2',
        '多个': 'so3'
      },
      backgroudIndex: '',
      backMap: {
        '基本没有': 'b1',
        '少量': 'b2',
        '超过一半': 'b3'
      }
    }
  },
  methods: {
    nextTask () {
      if (!this.check()) {
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
      let notDefault = this.faceIndex.length > 0 && this.personIndex.length > 0 &&
        this.saliencyIndex.length > 0 && this.textIndex.length > 0 &&
        this.semanticsIndex.length > 0 && this.backgroudIndex.length > 0
      if (!notDefault) {
        alert('图片没有完全标注')
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
            this.count = Math.max(this.count, this.sample.sequenceNum)
            this.clearAll()
            this.loadAll()
          }
        }).catch(e => console.log(e))
      })
    },
    loadAll () {
      let face = this.sample['attribute']['faceCount']
      if (face === '不包含') {
        this.faceIndex = 'f1'
      } else if (face === '一个') {
        this.faceIndex = 'f2'
      } else if (face === '多个') {
        this.faceIndex = 'f3'
      }

      let person = this.sample['attribute']['personCount']
      this.personIndex = this.personMap[person] || ''

      let saliency = this.sample['attribute']['saliencyObject']
      this.saliencyIndex = this.saliencyMap[saliency] || ''

      let text = this.sample['attribute']['containText']
      this.textIndex = this.textMap[text] || ''

      let so = this.sample['attribute']['semanticsObject']
      this.semanticsIndex = this.semanticsMap[so] || ''

      let back = this.sample['attribute']['backgroudRatio']
      this.backgroudIndex = this.backMap[back] || ''
    },
    clearAll () {
      this.faceIndex = ''
      this.personIndex = ''
      this.saliencyIndex = ''
      this.textIndex = ''
      this.semanticsIndex = ''
      this.backgroudIndex = ''
    },
    submmit () {
      return notateAPI.submmitNotation(this.sample).then(res => {
      })
    },
    face (event) {
      this.sample.attribute.faceCount = event.target.innerHTML
      this.faceIndex = event.target.id
    },
    person (event) {
      this.sample.attribute.personCount = event.target.innerHTML
      this.personIndex = event.target.id
    },
    saliency (event) {
      this.sample.attribute.saliencyObject = event.target.innerHTML
      this.saliencyIndex = event.target.id
    },
    text (event) {
      this.sample.attribute.containText = event.target.innerHTML
      this.textIndex = event.target.id
    },
    semantics (event) {
      this.sample.attribute.semanticsObject = event.target.innerHTML
      this.semanticsIndex = event.target.id
    },
    backgroud (event) {
      this.sample.attribute.backgroudRatio = event.target.innerHTML
      this.backgroudIndex = event.target.id
    },
    init () {
      let username = this.$store.state.username
      let notateType = this.$store.state.notateType
      notateAPI.getLatestWork(username, notateType).then(res => {
        this.sample = res.data.sample
        this.count = res.data.count
        this.clearAll()
        this.loadAll()
      }).catch(e => console.log(e))
    }
  },
  computed: {
    raw: function () {
      return this.sample.path ? this.sample.path : ''
    },
    curPg: function () {
      return this.sample.sequenceNum || ''
    }
  },
  created () {
    this.init()
  }
}
</script>

<style scoped>
  .barStyle {
    color: gray;
  }
</style>
