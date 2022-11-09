<template>
    <Bar :chart-options="chartOptions" :chart-data="chartData1" :chart-id="bar - chart" :dataset-id-key="datasetIdKey"
        :plugins="plugins" :css-classes="cssClasses" />
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
} from 'chart.js'

ChartJS.register(Title,Tooltip,Legend,BarElement,LineElement,LinearScale,CategoryScale,PointElement)

export default {
    name: 'BarChart',
    components: {
        Bar
    },
    props: {
        chartId: {
            type: String,
            default: 'bar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: 'customChart',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            chartData1: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    }
}
</script>

<style>
.customChart {
    width: 30%;
    display: flex;
}
</style>