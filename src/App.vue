<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'
export default {
  name: 'App',
  computed: {
    layout() {
      console.log(this.$route.meta)
      // return (this.$router.meta.layout || 'empty') + '-layout'
      return 'main-layout'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style lang="scss">
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
  }
</style>
