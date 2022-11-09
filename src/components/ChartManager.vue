<template>
    <div class="chart-content">
        <ChartUsers />
        <v-spacer></v-spacer>
        <ChartWorkingTimes />
        <v-spacer></v-spacer>
        <ChartTimeManager />
    </div>
</template>

<script>
import ChartUsers from './charts/ChartUsers.vue';
import ChartWorkingTimes from './charts/ChartWorkingTimes.vue';
import ChartTimeManager from './charts/ChartTimeManager.vue';

export default {
    name: 'ChartU',
    components: {
        ChartUsers,
        ChartWorkingTimes,
        ChartTimeManager
    }
}
</script>

<style>
.chart-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 1em;
}
</style>
