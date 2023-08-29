<template>
  <div class="h-[70px] w-full relative text-white">
    <img :src="header_bg" class="w-full h-full object-cover bg-slate-800" />
    <div class="absolute left-[50%] translate-x-[-50%]"></div>
    <div
      class="absolute right-[50%] translate-x-[50%] top-[50%] translate-y-[-50%] font-sans text-[30px] font-bold tracking-widest"
    >
      临平区内涝灾害预警
    </div>
    <div
      class="absolute right-20 top-[50%] translate-y-[-50%] text-[25px] font-mono"
    >
      <span class="mr-1">{{ year }}年</span>
      <span>{{ month + 1 }}月</span>
      <span class="mr-1">{{ date }}日</span>
      <span class="mr-1">{{ time }}</span>
      <span>{{ week }}</span>
    </div>
    <div class="absolute top-0 right-[120px]">
      <!-- <rainy-vue></rainy-vue> -->
          <cloudy-vue></cloudy-vue>
    <!-- <thunder-storm></thunder-storm> -->
    </div>

  </div>
</template>

<script setup>
import header_bg from './images/header_bg.png'
import { parseTime, getWeek, year, month, date } from '@/utils/time.js'
import cloudyVue from './weather/cloudy/index.vue'
import thunderStorm from './weather/thunderStorm/index.vue'
import rainyVue from './weather/rainy/index.vue'
const time = ref('')
const week = ref('')
const day = ref('')
const curTime = new Date()

time.value = parseTime(curTime, 'hh:mm:ss')
week.value = getWeek(curTime)
day.value = parseTime(curTime, 'yyyy.MM.dd')
setInterval(() => {
  time.value = parseTime(new Date(), 'hh:mm:ss')
}, 1000)
</script>

<style lang="scss" scoped></style>
