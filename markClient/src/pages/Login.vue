<template>
  <div class="collapse bg-dark show" id="navbarHeader">
    <div class="container">
      <div class="flexboxgrid__row___1y_mg flexboxgrid__center-xs___1JWon"
           style="padding-top: 100px;padding-bottom: 100px;">
        <div class="CenterForm__container___18i8_">
          <div class="CenterForm__innerContainer___1qFj9" style="width: 330px;margin: auto;">
            <div class="flexboxgrid__col-xs-12___phbtE Login__email___31hjn">
              <div style="font-size: 16px; line-height: 24px; width: 100%; height: 72px; display: inline-block; position: relative; background-color: transparent; font-family: AzoSans, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto;">
                <label for="usernameInput" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(0.75) translate(0px, -28px); transform-origin: left top; pointer-events: none; user-select: none; color: rgb(221, 222, 222); font-size: 14px;">Username</label>
                <input v-model="username" required type="text" name="email" value="" id="usernameInput" style="padding: 0px; position: relative; width: 100%; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgb(255, 255, 255); cursor: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 14px; line-height: inherit; font-family: inherit; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 28px; box-sizing: border-box; margin-top: 36px;">
                <div>
                  <hr style="border-top: none rgb(96, 96, 96); border-right: none rgb(96, 96, 96); border-bottom: 1px solid rgb(96, 96, 96); border-left: none rgb(96, 96, 96); border-image: initial; bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;">
                  <hr style="border-top: none rgb(255, 255, 255); border-right: none rgb(255, 255, 255); border-bottom: 2px solid rgb(255, 255, 255); border-left: none rgb(255, 255, 255); border-image: initial; bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                </div>
              </div>
            </div>
            <div class="flexboxgrid__col-xs-12___phbtE Login__password___1EuCO"
                 style="margin-bottom: 10px;">
              <div style="font-size: 16px; line-height: 24px; width: 100%; height: 72px; display: inline-block; position: relative; background-color: transparent; font-family: AzoSans, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto;">
                <label for="passwordInput" style="position: absolute; line-height: 22px; top: 38px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: scale(0.75) translate(0px, -28px); transform-origin: left top; pointer-events: none; user-select: none; color: rgb(221, 222, 222); font-size: 14px;">Password</label>
                <input v-model="password" required type="password" name="password" value="" id="passwordInput" style="padding: 0px; position: relative; width: 100%; border: none; outline: none; background-color: rgba(0, 0, 0, 0); color: rgb(255, 255, 255); cursor: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 14px; line-height: inherit; font-family: inherit; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 28px; box-sizing: border-box; margin-top: 36px;">
                <div>
                  <hr style="border-top: none rgb(96, 96, 96); border-right: none rgb(96, 96, 96); border-bottom: 1px solid rgb(96, 96, 96); border-left: none rgb(96, 96, 96); border-image: initial; bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;">
                  <hr style="border-top: none rgb(255, 255, 255); border-right: none rgb(255, 255, 255); border-bottom: 2px solid rgb(255, 255, 255); border-left: none rgb(255, 255, 255); border-image: initial; bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
                </div>
              </div>
            </div>
            <div class="flexboxgrid__col-xs-12___phbtE" style="padding-left: 0px;"></div>
            <div class="flexboxgrid__col-xs-12___phbtE">
              <div class="flexboxgrid__row___1y_mg flexboxgrid__end-xs___33Mku">
                <div style="color: rgba(0, 0, 0, 0.87); background-color: rgb(255, 255, 255); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; box-sizing: border-box; font-family: AzoSans, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px; border-radius: 2px; display: inline-block; min-width: 88px; width: 100%; margin-top: 35px; height: 50px;">
                  <button @click="login" type="button" class="mui-btn mui-btn--raised loginButton"
                          style="border: 10px;box-sizing: border-box;display: inline-block;font-family: AzoSans, sans-serif;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);cursor: pointer;text-decoration: none;margin: 0px;padding: 0px;outline: none;font-size: inherit;font-weight: inherit;transform: translate(0px, 0px);position: relative;height: 50px;line-height: 50px;width: 100%;border-radius: 2px;transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;background-color: rgb(171, 204, 218);text-align: center;">
                    <div>
                      <div style="height: 50px; border-radius: 2px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; top: 0px;">
                        <span style="position: relative; opacity: 1; font-size: 16px; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; margin: 0px; user-select: none; padding-left: 16px; padding-right: 16px; color: rgb(0, 0, 0); top: 1px;">Log In</span>
                      </div>
                    </div>
                    <span class="mui-btn__ripple-container"><span
                      class="mui-ripple mui--is-animating"
                      style="width: 667.533px; height: 667.533px; top: -302px; left: -29px;"></span></span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import notateAPI from '@/api/NotationAPI'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      notateAPI.login(this.username, this.password)
        .then(res => {
          if (res.data) {
            let url = this.$store.state.curUrl
            console.log('url  ' + url)
            this.$router.push(url)
            this.$store.commit('saveUsername', this.username)
          }
        }).catch(res => {
          // console.log('error ' + res)
        })
    }
  }
}
</script>

<style scoped>

</style>
