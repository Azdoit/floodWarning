<template>
  <router-view></router-view>
</template>

<script setup>
import { useProfile } from '@/store/profile'
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()

// const profile = useProfile()
// profile.changeLoginState()
// profile.getToken('123')
// console.log(profile.isLogin)
// console.log(profile.token)
// watch([width, height], (newVal) => {
//   console.log('width: ' + newVal[0])
//   console.log('height: ' + newVal[1])
// })
</script>

<style lang="scss" scoped></style>
