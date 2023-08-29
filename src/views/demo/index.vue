<template>
  <div class="px-6">
    <div class="flex gap-5">
      <div ref="chartRef1" class="h-[280px] w-[280px]"></div>
      <div ref="chartRef2" class="h-[280px] w-[280px]"></div>
      <div ref="chartRef3" class="h-[280px] w-[280px]"></div>
      <div ref="chartRef4" class="h-[280px] w-[280px]"></div>
      <div ref="chartRef5" class="h-[280px] w-[280px]"></div>
    </div>
    <div class="flex gap-5 mt-1">
      <div ref="chartRef6" class="h-[280px] w-[280px]"></div>
      <div ref="chartRef7" class="h-[280px] w-[280px]"></div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
const chartRef1 = ref(null)
const chartRef2 = ref(null)
const chartRef3 = ref(null)
const chartRef4 = ref(null)
const chartRef5 = ref(null)
const chartRef6 = ref(null)
const chartRef7 = ref(null)
let myChart1, myChart2, myChart3, myChart4, myChart5, myChart6, myChart7
let option1 = {
  grid: {
    top: 50,
    left: 20,
    right: 20,
    bottom: 20,
    containLabel: true
  },
  legend: {
    data: ['图例1', '图例2', '图例3'],
    // orient: 'vertical',
    // right: 10,
    top: 10
    // icon: 'rect'
    // selected: {
    //   '2015': true,
    //   '2016': true,
    //   '2017': true
    // }
  },
  tooltip: {},
  // dataset: {
  //   // 提供一份数据。
  //   source: [
  //     ['product', '2015', '2016', '2017'],
  //     ['Matcha Latte', 43.3, 85.8, 93.7],
  //     ['Milk Tea', 83.1, 73.4, 55.1],
  //     ['Cheese Cocoa', 86.4, 65.2, 82.5],
  //     ['Walnut Brownie', 72.4, 53.9, 39.1]
  //   ]
  // },
  // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
  xAxis: {
    type: 'category',
    data: ['Matcha', 'Milk Tea', 'Cheese'],
    axisLine: {},
    axisTick: {
      length: 0
    },
    axisLabel: {
      formatter: '{value}az',
      align: 'center'
      // ...
    }
  },
  // 声明一个 Y 轴，数值轴。
  yAxis: {},
  // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
  series: [
    {
      name: '图例1',
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.1)'
      },
      label: {
        show: true,
        position: 'top',
        textStyle: {
          fontSize: 10
        }
      },
      data: [
        43.3,
        {
          value: 50,
          // 设置单个柱子的样式
          itemStyle: {
            barBorderRadius: 5,
            borderWidth: 1,
            borderType: 'solid',
            borderColor: '#73c0de',
            shadowColor: '#5470c6',
            shadowBlur: 3,
            shadowOffsetX: 1,
            shadowOffsetY: 1
          }
        },
        93.7
      ]
    },
    { name: '图例2', type: 'bar', data: [73.4, 55.1, 86.4] },
    { name: '图例3', type: 'bar', data: [82.5, 72.4, 53.9] }
  ]
}
let option2 = {
  grid: {
    top: 50,
    left: 20,
    right: 20,
    bottom: 20,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150],
      type: 'line',
      stack: 'x',
      areaStyle: {
        color: '#fac',
        opacity: 0.3
      },
      label: {
        show: true
      }
    },
    {
      data: [70, 56, 73],
      type: 'line',
      stack: 'x',
      areaStyle: {
        color: '#ff0',
        opacity: 0.5
      }
    }
  ]
}
let option3 = {
  grid: {
    top: 50,
    left: 20,
    right: 20,
    bottom: 20,
    containLabel: true
  },
  legend: {
    orient: 'vertical',
    icon: 'circle', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    left: '60%',
    top: '5%',
    itemHeight: 10,
    itemWidth: 10,
    itemGap: 5,
    textStyle: {
      fontSize: 12,
      lineHeight: 5,
      color: 'rgba(255,255,255,0.8)'
    },
    data: ['直接访问', '联盟广告', '搜索引擎']
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: '直接访问'
        },
        {
          value: 234,
          name: '联盟广告'
        },
        {
          value: 1548,
          name: '搜索引擎'
        }
      ],
      clockwise: false, // 让data的排列是逆时针
      radius: ['50%'],
      label: {}
    }
  ]
}
let option4 = {
  grid: {
    top: 50,
    left: 20,
    right: 20,
    bottom: 20,
    containLabel: true
  },
  title: {
    text: '大区数据信息',
    textStyle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    },
    textAlign: 'left',
    padding: [20, 10, 0, 20]
  },
  xAxis: {
    show: false,
    type: 'value',
    max: (value) => {
      parseInt(value.max * 1.2)
    }
  },
  yAxis: {
    type: 'category',
    data: ['华北', '东北', '华东', '中南', '西南', '西北'],
    inverse: true,
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#9eb1c8'
    }
  },
  series: [
    {
      type: 'bar',
      data: [
        { name: '华北', value: 15 },
        { name: '东北', value: 25 },
        { name: '华东', value: 18 },
        { name: '中南', value: 55 },
        { name: '西南', value: 45 },
        { name: '西北', value: 35 }
      ],
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180,180,180,0.2)'
      },
      itemStyle: {
        color: '#479AD3',
        barBorderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.3)'
      },
      barWidth: 12,
      label: {
        show: true,
        position: 'right',
        textStyle: {
          color: '#fff'
        }
      }
    }
  ]
}
let option5 = {
  grid: {
    top: 50,
    left: 20,
    right: 20,
    bottom: 20,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Matcha', 'Milk Tea', 'Cheese'],
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#9eb1c8'
    }
  },
  yAxis: {
    type: 'value',
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#9eb1c8'
    },
    max: (value) => {
      parseInt(value.max * 1.2)
    }
  },
  series: [
    {
      type: 'bar',
      data: [
        { name: 'Matcha', value: 55 },
        { name: 'Milk Tea', value: 35 },
        { name: 'Cheese', value: 18 }
      ],
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180,180,180,0.2)'
      },
      itemStyle: {
        color: '#479AD3',
        barBorderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.3)'
      },
      barWidth: 12,
      label: {
        show: true,
        position: 'top',
        textStyle: {
          color: '#fff'
        }
      }
    }
  ]
}
let option6 = {
  grid: {
    top: 50,
    left: 20,
    right: 20,
    bottom: 20,
    containLabel: true
  },
  // 雷达图的坐标系配置
  radar: {
    name: {
      // 设置indicator中name的样式
      textStyle: {
        color: '#05D5FF',
        fontSize: 14
      }
    },
    shape: 'polygon', //默认是polygon还可以是circle
    center: ['50%', '50%'],
    radius: '60%', // 直径占长或宽（最小）的比例
    startAngle: 120, //逆时针，默认0为右中
    axisLine: {
      lineStyle: {
        color: 'rgba(5,213,255,.8)' // 雷达图的轴线样式
      }
    },
    splitLine: {
      show: true, //默认为true,连接雷达图轴线的线
      lineStyle: {
        width: 1,
        color: 'rgba(5,213,255,.8)'
      }
    },
    indicator: [
      { name: '华北', max: 100 }, // 设置最大值
      { name: '东北', max: 100 },
      { name: '华东', max: 100 },
      { name: '中南', max: 100 },
      { name: '西南', max: 100 },
      { name: '西北', max: 100 }
    ],
    splitArea: {
      // 洋葱一样一层层的区域
      show: true, // 默认为true
      areaStyle: {
        color: 'rgba(5,213,255,0.2)'
      }
    }
  },
  // 极坐标
  polar: {
    center: ['50%', '50%'], // 默认就是这个配置
    radius: '0%' // 不显示极坐标
  },
  // 坐标角度,就是外面一圈
  angleAxis: {
    min: 0,
    interval: 5,
    clockwise: false
  },
  // 径向轴
  radiusAxis: {
    min: 0,
    interval: 20,
    splitLine: {
      show: true
    }
  },
  // 图表核心配置
  series: [
    {
      type: 'radar',
      symbol: 'circle', // 点的形状
      symbolSize: 10, // 点的大小
      itemStyle: {
        normal: {
          color: '#05D5FF' // 点的颜色
        }
      },
      areaStyle: {
        // 所有点所围起来的范围的颜色
        normal: {
          color: '#05D5FF',
          opacity: 0.5
        }
      },
      lineStyle: {
        // 点与点之间的线条的样式
        width: 2,
        color: '#05D5FF'
      },
      label: {
        // 显示value
        normal: {  // 除了normal还有emphasis
          show: true,
          color: '#fff'
        }
      },
      data: [
        {
          value: [55, 23, 64, 12, 78, 34]
        }
      ]
    }
  ]
}

const getSeriesData = () => {
  let series = []
  const data = [
    {
      name: '东北',
      value: 66
    },
    {
      name: '西北',
      value: 141
    },
    {
      name: '东南',
      value: 87
    },
    {
      name: '西南',
      value: 456
    }
  ]
  data.forEach((item, index) => {
    // 上层
    series.push({
      name:item.name,
      type: 'pie',
      clockwise: false,
      hoverAnimation: false,
      radius: [68 - index * 15 + '%', 73 - index * 15 + '%'],
      center: ['55%', '55%'],
      label: {
        show: false
      },
      data: [
        { name: item.name, value: item.value },
        {
          value: 1000,
          itemStyle: {
            color: 'rgba(0,0,0,0)',
            borderWidth: 0
          },
          tooltip: {
            show: false
          },
          hoverAnimation: false
        }
      ]
    })
    // 底层
    series.push({
      name:item.name,
      type:'pie',
      silent:true,
      z:1, // 让环形图在底层
      clockwise:false, //逆时针排列
      hoverAnimation:false,
      radius:[68 - index * 15 + '%', 73 - index * 15 + '%'],
      center: ['55%', '55%'],
      label: {
        show: false
      },
      data:[
        {
          value:7.5,
          itemStyle:{
            color:'rgb(3,31,62)',
            borderWidth:0
          },
          tooltip:{
            show:false
          },
          hoverAnimation:false
        },
        {
          value:2.5,
          itemStyle:{
            color:'rgba(0,0,0,0)',
            borderWidth:0
          },
          tooltip:{
            show:false
          },
          hoverAnimation:false
        }
      ]
    })

  })
  return series
}
let option7 = {
  grid: {
    top: 50,
    left: 20,
    right: 20,
    bottom: 20,
    containLabel: true
  },
  legend: {
    orient: 'vertical',
    icon: 'circle', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    left: '60%',
    top: '14%',
    itemHeight: 10,
    itemWidth: 10,
    itemGap: 5,
    textStyle: {
      fontSize: 12,
      lineHeight: 5,
      color: 'rgba(255,255,255,0.8)'
    },
    data: ['东北', '西北', '东南', '西南']
  },
  series: getSeriesData()
}
onMounted(() => {
  myChart1 = echarts.init(chartRef1.value, 'dark')
  myChart1.setOption(option1)
  myChart1.on('click', (params) => {
    console.log(params)
  })
  myChart1.on('legendselectchanged', (params) => {
    console.log(params.name)
  })
  myChart2 = echarts.init(chartRef2.value, 'dark')
  myChart2.setOption(option2)
  myChart3 = echarts.init(chartRef3.value, 'dark')
  myChart3.setOption(option3)
  myChart4 = echarts.init(chartRef4.value, 'dark')
  myChart4.setOption(option4)
  myChart5 = echarts.init(chartRef5.value, 'dark')
  myChart5.setOption(option5)
  myChart6 = echarts.init(chartRef6.value, 'dark')
  myChart6.setOption(option6)
  myChart7 = echarts.init(chartRef7.value, 'dark')
  myChart7.setOption(option7)
})
</script>

<style lang="scss" scoped></style>
