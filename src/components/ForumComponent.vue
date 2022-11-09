<template>
    <div>
        
        <H4>HOW CAN WE HELP YOU?</H4>
        <v-text-field v-model="search" dense filled label="Filled" clearable></v-text-field>
        <H4>ALL CATEGORIES</H4>
        <v-container>
            <v-row>
                <v-col cols="12" md="3">
                    <v-skeleton-loader v-bind="attrs" type="article, actions"></v-skeleton-loader>
                    <v-skeleton-loader v-bind="attrs" type="article, actions"></v-skeleton-loader>
                    <v-skeleton-loader v-bind="attrs" type="article, actions"></v-skeleton-loader>

                </v-col>

                <v-col cols="12" md="3">
                    <v-skeleton-loader v-bind="attrs" type="article, actions"></v-skeleton-loader>
                    <v-skeleton-loader v-bind="attrs" type="article, actions"></v-skeleton-loader>
                    <v-skeleton-loader v-bind="attrs" type="article, actions"></v-skeleton-loader>
                </v-col>

                <v-col cols="12" md="3">
                    <v-skeleton-loader v-bind="attrs" type="article, actions"></v-skeleton-loader>
                    <v-skeleton-loader v-bind="attrs" type="article, actions"></v-skeleton-loader>
                    <v-skeleton-loader v-bind="attrs" type="article, actions"></v-skeleton-loader>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        attrs: {
            class: 'mb-6',
            boilerplate: true,
            elevation: 2,
        },
    }),
}
</script>

<style>

</style>