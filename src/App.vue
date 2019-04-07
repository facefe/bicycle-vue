<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { readLoginMes } from './api/loginMes'
import { mapMutations } from 'vuex'
export default {
  name: 'app',
  components: {
  },
  methods: {
      ...mapMutations(['setUser']),
      getMesLogin () {
          let mes = readLoginMes()
          if (mes) {
              this.setUser(mes)
          }
      }
  },
    mounted() {
      this.getMesLogin()   
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
