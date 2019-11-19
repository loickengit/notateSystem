<template>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div id="header" class="container d-flex justify-content-between">
      <div class="container-left col-md-3" style="color: darkgray;">
        <span>前进: 空格;  后退: f</span>
      </div>
      <div id="pgBar" class="col-md-3" style="text-align: center">
        <span id="username">{{this.$store.state.username}}</span>:
        <span id="currentPG">{{cur}}</span>/
        <span id="totalPG">{{total}}</span>
      </div>
      <div class="container-right col-md-5">
        <div class="navbar">
            <ul class="nav">
              <li v-on:click="changeType" class="btn" :class="classRetar">Retargeting</li>
              <li v-on:click="changeType" class="btn" :class="classSaliency">显著性标注</li>
              <li v-on:click="changeType" class="btn" :class="classAttribute">属性标注</li>
              <li v-on:click="changeType" class="btn" :class="classGrain">纹理标注</li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: ['total', 'cur'],
  data () {
    return {
      valid: true,
      notateType: this.$store.state.notateType,
      des2type: {
        'Retargeting': 'RETARGETING',
        '显著性标注': 'SALIENCY',
        '属性标注': 'ATTRIBUTE'
      }
    }
  },
  methods: {
    changeType (event) {
      let notateType = this.des2type[event.target.innerHTML]
      if (notateType !== this.notateType) {
        this.notateType = notateType
        this.$store.commit('alterNotateType', notateType)
      }
    }
  },
  computed: {
    classRetar: function () {
      return {
        'btn-link': this.notateType !== 'RETARGETING',
        'btn-primary': this.notateType === 'RETARGETING'
      }
    },
    classSaliency: function () {
      return {
        'btn-link': this.notateType !== 'SALIENCY',
        'btn-primary': this.notateType === 'SALIENCY'
      }
    },
    classAttribute: function () {
      return {
        'btn-link': this.notateType !== 'ATTRIBUTE',
        'btn-primary': this.notateType === 'ATTRIBUTE'
      }
    },
    classGrain: function () {
      return {
        'btn-link': this.notateType !== 'GRAIN',
        'btn-primary': this.notateType === 'GRAIN'
      }
    }

  }
}
</script>

<style scoped>
  #pgBar {
    color: rgba(255, 255, 255, 0.5);
    font-size: 18px;
  }
</style>
