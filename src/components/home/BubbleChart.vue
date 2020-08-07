<template>
    <div id="bubble-chart">
        <statistics-bubble statistic="" :statisticTitle="$t('BubbleChart')" :chartData="series"></statistics-bubble>
    </div>
</template>

<script>
    import StatisticsBubble from "../statistics-cards/StatisticsCardBubble";
    import { mapActions, mapGetters } from "vuex";

    export default {
        name: "BubbleChart",
        components: {
            StatisticsBubble
        },
        data() {
            return {}
        },
        computed: {
            ...mapGetters('home', ['getSeries']),
            series(){
                return this.getSeries.length ? this.getSeries : [{name: 'X', data: [[1, 2, 1]]}]
            }
        },
        methods: {
            ...mapActions('home', ['fetchData']),
        },
        created() {
            // call api to fetch covid19 data
            this.fetchData()
        }
    }
</script>
