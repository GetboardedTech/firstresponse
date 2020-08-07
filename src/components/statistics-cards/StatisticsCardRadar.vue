<!-- =========================================================================================
    File Name: StatisticsCard.vue
    Description: Statistics card component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <vx-card class="overflow-hidden">
        <div slot="no-body">
            <div class="p-6" :class="{
              'flex justify-between flex-row-reverse items-center': iconRight,
              'text-center': !iconRight && hideChart,
              'pb-0': !hideChart
            }">
<!--                <feather-icon :icon="icon" class="p-3 inline-flex rounded-full" :class="[`text-${color}`, {'mb-4': !iconRight}]" :style="{background: `rgba(var(&#45;&#45;vs-${color}),.15)`}"></feather-icon>-->
                <div class="truncate">
                    <h2 class="mb-1 font-bold">{{ statistic }}</h2>
                    <span>{{ statisticTitle }}</span>
                </div>
            </div>

            <div class="line-area-chart" v-if="!hideChart">
                <vue-apex-charts ref="apexChart" :type="type" height=500 width='100%' :options="chartOptions" :series="chartData" />
            </div>
        </div>
    </vx-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import _color from '@/assets/utils/color.js'

export default{
    name: 'StatisticsCardRadar',
    props: {
        // icon: {
        //     type: String,
        //     required: true
        // },
        statistic: {
            type: [Number, String],
            required: true,
        },
        statisticTitle: {
            type: String,
            required: true
        },
        chartData: {
            type: Array,
            required: true
        },
        chartOptions: {
            type: Object,
            required: true
        },
        color: {
            type: String,
            default: 'primary',
        },
        type: {
            type: String,
            default: 'radar'
        },
        iconRight: {
            type: Boolean,
            default: false
        },
        hideChart: {
          type: Boolean,
          default: false,
        }
    },
    data() {
      return {
      }
    },
    watch: {
        themePrimaryColor() {
            this.$refs.apexChart.updateOptions({ theme: { monochrome: { color: this.getHex(this.color) } } });
        }
    },
    computed: {
        themePrimaryColor() {
            return this.$store.state.themePrimaryColor;
        }
    },
    methods: {
        getHex(color) {
            if(_color.isColor(color)) {
              let rgb  = window.getComputedStyle(document.documentElement).getPropertyValue(`--vs-${color}`);
              rgb = rgb.split(",");
              return "#" + ((1 << 24) + (Number(rgb[0]) << 16) + (Number(rgb[1]) << 8) + Number(rgb[2])).toString(16).slice(1);
            }
            return color
        },
        gradientToColor(color) {
          let gradientToColors = {
            "primary": "#A9A2F6",
            "success": "#55DD92",
            "warning": "#ffc085",
            "danger": "#F97794"
          }

          return gradientToColors[color] ? gradientToColors[color] : gradientToColors["primary"]
        }
    },
    components: {
        VueApexCharts
    },
    created() {
        // assign chart options
    }
}
</script>
