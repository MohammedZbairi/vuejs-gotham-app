<template>
    <div>
        <ChartManager />
        <UserAccount />
    </div>
</template>
  
<script>
import ChartManager from '@/components/ChartManager.vue';
import UserAccount from '@/components/UserAccount.vue';
export default {
    components: {
        ChartManager,
        UserAccount
    },
    data() {
        return {
            
        }
    },
    computed: {
        bg() {
            return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
        },
    },
}
</script>
  
<style>

</style>