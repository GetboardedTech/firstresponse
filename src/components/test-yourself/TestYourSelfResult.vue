<template>
    <div id="test-yourself-result">
        <statistics-radar statistic="82.3%" :statisticTitle="$t('PredictionAccuracy')" :chartData="series" :chartOptions="getChartOptions"></statistics-radar>
        <vx-card class="mt-5 p-5" v-if="result.series.length">
            <div slot="no-body">
                <h2 class="mb-1 mb-5">{{$t('Result')}}</h2>
                <div class="vx-row text-center">
                    <div class="vx-col w-full lg:w-1/3 mb-base text-danger">
                        <h2 class="mb-1 font-bold text-danger">{{ Math.round(result.probabilities.success*100) }}%</h2>
                        <span>{{$t('PositiveCoronaVirus')}}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 mb-base">
                        <h2 class="mb-1 font-bold">2%</h2>
                        <span>{{$t('MarginError')}}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 mb-base">
                        <h2 class="mb-1 font-bold">{{ Math.round(result.probabilities.failed*100) }}%</h2>
                        <span>{{$t('NegativeCoronaVirus')}}</span>
                    </div>
                </div>
            </div>
        </vx-card>
    </div>
</template>

<script>
    import StatisticsRadar from "../statistics-cards/StatisticsCardRadar";
    import { mapGetters } from 'vuex'
    import chartConfigs from "../statistics-cards/chartConfigs.js"

    export default {
        name: "TestYourSelfResult",
        components: {
            StatisticsRadar
        },

        data: function () {
            return {
                chartOptions: null,
                defaultSeries: [
                    {
                        name: this.$t('GraphEnable'),
                        data: [
                            98, 70, 60, 60, 40, 20,
                            15, 10, 2, 2, 1, 1
                        ],
                    },
                    {
                        name:this.$t('GraphDisable'),
                        data: [
                            0, 0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0, 0
                        ],
                    }
                ],
            }
        },
        computed: {
            ...mapGetters('testYourSelf', ['getResult', 'getLabels']),
            result() {
                return this.getResult(this.defaultSeries[0].data) ? this.getResult(this.defaultSeries[0].data) : {}
            },
            series() {
              const series = JSON.parse(JSON.stringify(this.defaultSeries))
              if (this.result.series.length) {
                  series[0].data = this.result.defaultSeries
                  series[1].data = this.result.series
              }
              return series
            },
            getChartOptions(){
                const temp = Object.assign({}, this.chartOptions)
                temp.labels = this.getLabels
                return temp
            }
        },
        created() {
            this.chartOptions = Object.assign({}, chartConfigs.statisticsRadar)
        }
    }
</script>
