<template>
  <!-- <div class="fixed top-1 left-2 z-10">
    <a-select
      v-model:value="value"
      show-search
      placeholder="搜索设备"
      style="width: 250px"
      :options="options"
      :filter-option="filterOption"
      notFoundContent="没有找到对应设备"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></a-select>
    <div class="absolute left-1 top-2 text-sm cursor-pointer">
      <img :src="icon" class="w-2.5 h-2.5" />
    </div>
  </div> -->
  <div id="map" ref="mapContainer" class="h-screen w-screen"></div>
  <!-- <div
    id="popup"
    class="bg-white h-10 flex flex-col justify-center px-1 rounded text-sm text-white bg-zinc-800/70"
  ></div> -->
</template>

<script setup>
import mapUrls from '@/GIS/mapUrls.js'
import TileLayer from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import { Vector as VectorSource } from 'ol/source.js'
import { Vector as VectorLayer } from 'ol/layer.js'
import { Fill, Stroke, Style, Text, Icon } from 'ol/style.js'
import { Modify } from 'ol/interaction.js'
import { XYZ } from 'ol/source'
import { Map, View } from 'ol'
import Overlay from 'ol/Overlay'
import coordtransform from 'coordtransform'
import { ScaleLine, defaults as defaultControls } from 'ol/control'
// import icon from '/icon.png'

let map,
  baseLayers = [],
  vecLayer,
  imgLayer,
  layerLp,
  popup,
  markerSource,
  markerLayer,
  iconFeatures

const mapContainer = ref(null)
// 创建影像底图
const createdBaseLayer = () => {
  imgLayer = new TileLayer({
    source: new XYZ({
      url: mapUrls['tian-img']
    }),
    title: '影像底图'
  })
  baseLayers.push(imgLayer)
}

createdBaseLayer()

// 创建临平遥感影像地图
const createdLPLayer = () => {
  layerLp = new TileLayer({
    source: new TileWMS({
      url: 'http://121.40.45.178:8090/geoserver/wms/',
      params: {
        VERSION: '1.1.0',
        REQUEST: 'GetMap',
        layers: 'LYN:LPQ3857' // LYN:linping_16db,(地名标记)  LYN:LPQ3857,LYN:lp_water,LYN:osm_lp,LYN:lp_vegetatin
      },
      zIndex: 1000,
      crossOrigin: 'anonymous',
      serverType: 'geoserver'
    })
  })
  map.addLayer(layerLp)
}
// const options = ref([
//   {
//     value: 'smartLock',
//     label: '智能门锁'
//   },
//   {
//     value: 'gasPressure',
//     label: '燃气压力传感器'
//   },
//   {
//     value: 'carSensing',
//     label: '车载综合感知终端'
//   },
//   {
//     value: 'fallSensing',
//     label: '跌倒监测报警器'
//   },
//   {
//     value: 'doorSensing',
//     label: '门磁传感器'
//   },
//   {
//     value: 'waterLevelSensing',
//     label: '液位监测传感器'
//   }
// ])

// const handleChange = (value) => {
//   popup.setPosition([0, 0])
//   if (markerSource.getFeatures()) {
//     markerSource
//       .getFeatures()
//       .forEach((feature) => markerSource.removeFeature(feature))
//   }
//   markerSource.addFeatures(
//     iconFeatures.filter((item) => item.get('value') === value)
//   )
// }
// const handleBlur = () => {
//   // console.log('blur')
// }
// const handleFocus = () => {
//   // console.log('focus')
//   value.value = undefined
// }
// const filterOption = (input, option) => {
//   // console.log(option)
//   // console.log(input)
//   // console.log(option.label.includes(input))
//   return option.label.includes(input)
// }
// const value = ref(undefined)

// // 创建marker
// const createMarker = () => {
//   const gcj02Coords = [
//     [120.299222, 30.419154],
//     [120.267272, 30.43654],
//     [120.268061, 30.440031],
//     [120.289082, 30.431996],
//     [120.291848, 30.448023],
//     [120.298168, 30.445034],
//     [120.312722, 30.501833],
//     [120.246, 30.391],
//     [120.287861, 30.416072],
//     [120.269444, 30.457916]
//   ]
//   const wgs84Coords = gcj02Coords.map((item) =>
//     coordtransform.gcj02towgs84(item[0], item[1])
//   )
//   const info = [
//     {
//       coord: wgs84Coords[0],
//       type: '智能门锁',
//       value: 'smartLock',
//       street: '南苑街道'
//     },
//     {
//       coord: wgs84Coords[1],
//       type: '燃气压力传感器',
//       value: 'gasPressure',
//       street: '临平街道'
//     },
//     {
//       coord: wgs84Coords[2],
//       type: '车载综合感知终端',
//       value: 'carSensing',
//       street: '临平街道'
//     },
//     {
//       coord: wgs84Coords[3],
//       type: '燃气压力传感器',
//       value: 'gasPressure',
//       street: '临平街道'
//     },
//     {
//       coord: wgs84Coords[4],
//       type: '跌倒监测报警器',
//       value: 'fallSensing',
//       street: '东湖街道'
//     },
//     {
//       coord: wgs84Coords[5],
//       type: '门磁传感器',
//       value: 'doorSensing',
//       street: '东湖街道'
//     },
//     {
//       coord: wgs84Coords[6],
//       type: '液位监测传感器',
//       value: 'waterLevelSensing',
//       street: '运河街道'
//     },
//     {
//       coord: wgs84Coords[7],
//       type: '液位监测传感器',
//       value: 'waterLevelSensing',
//       street: '星桥街道'
//     },
//     {
//       coord: wgs84Coords[8],
//       type: '液位监测传感器',
//       value: 'waterLevelSensing',
//       street: '临平街道'
//     },
//     {
//       coord: wgs84Coords[9],
//       type: '液位监测传感器',
//       value: 'waterLevelSensing',
//       street: '临平街道'
//     }
//   ]

//   let iconFeature1,
//     iconFeature2,
//     iconFeature3,
//     iconFeature4,
//     iconFeature5,
//     iconFeature6,
//     iconFeature7,
//     iconFeature8,
//     iconFeature9,
//     iconFeature10

//   iconFeatures = [
//     iconFeature1,
//     iconFeature2,
//     iconFeature3,
//     iconFeature4,
//     iconFeature5,
//     iconFeature6,
//     iconFeature7,
//     iconFeature8,
//     iconFeature9,
//     iconFeature10
//   ]

//   //创建图标特性
//   for (let i = 0; i < wgs84Coords.length; i++) {
//     iconFeatures[i] = new Feature({
//       geometry: new Point(info[i].coord),
//       name: `marker${i}`,
//       type: info[i].type,
//       value: info[i].value,
//       street: info[i].street
//     })
//     switch (iconFeatures[i].get('type')) {
//       case '智能门锁':
//         //创建图标样式
//         iconFeatures[i].setStyle(
//           new Style({
//             image: new Icon({
//               // opacity: 0.6,
//               src: 'marker/lace-red.png',
//               scale: 0.2,
//               // color: 'red',
//               anchor: [0.5, 200],
//               anchorXUnits: 'fraction',
//               anchorYUnits: 'pixels'
//             })
//           })
//         )
//         break
//       case '燃气压力传感器':
//         //创建图标样式
//         iconFeatures[i].setStyle(
//           new Style({
//             image: new Icon({
//               // opacity: 0.6,
//               src: 'marker/lace-yellow.png',
//               scale: 0.2,
//               // color: 'red',
//               anchor: [0.5, 200],
//               anchorXUnits: 'fraction',
//               anchorYUnits: 'pixels'
//             })
//           })
//         )
//         break
//       case '车载综合感知终端':
//         //创建图标样式
//         iconFeatures[i].setStyle(
//           new Style({
//             image: new Icon({
//               // opacity: 0.6,
//               src: 'marker/mark-blue.png',
//               scale: 0.2,
//               // color: 'red',
//               anchor: [0.5, 200],
//               anchorXUnits: 'fraction',
//               anchorYUnits: 'pixels'
//             })
//           })
//         )
//         break
//       case '跌倒监测报警器':
//         //创建图标样式
//         iconFeatures[i].setStyle(
//           new Style({
//             image: new Icon({
//               // opacity: 0.6,
//               src: 'marker/mark-red.png',
//               scale: 0.2,
//               // color: 'red',
//               anchor: [0.5, 200],
//               anchorXUnits: 'fraction',
//               anchorYUnits: 'pixels'
//             })
//           })
//         )
//         break
//       case '门磁传感器':
//         //创建图标样式
//         iconFeatures[i].setStyle(
//           new Style({
//             image: new Icon({
//               // opacity: 0.6,
//               src: 'marker/point-yellow.png',
//               scale: 0.2,
//               // color: 'blue',
//               anchor: [0.5, 200],
//               anchorXUnits: 'fraction',
//               anchorYUnits: 'pixels'
//             })
//           })
//         )
//         break
//       case '液位监测传感器':
//         //创建图标样式
//         iconFeatures[i].setStyle(
//           new Style({
//             image: new Icon({
//               // opacity: 0.6,
//               src: 'marker/mark-green.png',
//               scale: 0.2,
//               // color: 'brown',
//               anchor: [0.5, 200],
//               anchorXUnits: 'fraction',
//               anchorYUnits: 'pixels'
//             })
//           })
//         )
//         break
//     }
//   }

//   markerSource = new VectorSource()
//   // markerSource.addFeatures(iconFeatures)
//   markerLayer = new VectorLayer({
//     source: markerSource
//   })
//   markerLayer.setVisible(true)
//   map.addLayer(markerLayer)

//   // 在map实例中创建一个dom，它的位置需要通过popup.setPosition([long,lat])来确定
//   popup = new Overlay({
//     element: document.getElementById('popup'),
//     positioning: 'bottom-center',
//     stopEvent: false,
//     offset: [0, -40]
//   })
//   map.addOverlay(popup)

//   // 点击markerFeature时就弹出对应信息
//   map.on('click', function (e) {
//     const feature = map.forEachFeatureAtPixel(e.pixel, function (feature) {
//       return feature
//     })
//     if (feature && feature.get('name')) {
//       const coordinates = feature.getGeometry().getCoordinates()
//       // console.log(coordinates)
//       popup.setPosition(coordinates)

//       const content = `<div>安装设备：${feature.get('type')}</div>
//        <div>所属街道：${feature.get('street')}</div>
//        <div>经度：${feature.getGeometry().getCoordinates()[0]}</div>
//        <div>纬度：${feature.getGeometry().getCoordinates()[1]}</div>`
//       // 获取popup的dom
//       popup.getElement().innerHTML = content
//     } else {
//       popup.setPosition([0, 0])
//     }
//   })

//   //当鼠标移入markerFeature时就设置为cursor：pointer
//   map.on('pointermove', function (e) {
//     const feature = map.forEachFeatureAtPixel(e.pixel, function (feature) {
//       return feature
//     })
//     if (feature && feature.get('name')) {
//       mapContainer.value.style.cursor = 'pointer'
//     } else {
//       mapContainer.value.style.cursor = ''
//     }
//   })
// }

onMounted(() => {
  // 加载天地图底图
  map = new Map({
    target: 'map',
    layers: baseLayers,
    view: new View({
      projection: 'EPSG:4326',
      center: [120.25, 30.44],
      zoom: 12,
      maxZoom: 20,
      minZoom: 5
    }),
    controls: defaultControls({
      zoom: false,
      rotate: false,
      attribution: false
    })
  })
  // 获取临平遥感影像地图
  createdLPLayer()
  // 添加markerLayer
  // createMarker()
})
</script>
<style lang="scss" scoped>
// :deep() {
//   .ant-select-selector {
//     padding: 0 38px !important;
//     .ant-select-selection-search {
//       padding-left: 26px;
//     }
//   }
// }
</style>
