<template>
  <div>
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
        <v-img max-height="150" max-width="250" src="../assets/logo.png"></v-img>
      </div>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mx-2" small fab dark v-bind="attrs" v-on="on" color="primary">
            <v-icon dark>
              mdi-account
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link>
            <v-list-item-title>
              <v-icon color="primary" dark>
                mdi-account-circle
              </v-icon>
              Profil
            </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>
              <v-icon color="primary" dark>
                mdi-cog
              </v-icon>
              Settings
            </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <router-link to="/" tag="button">
              <v-list-item-title>

                <v-icon color="primary" dark>
                  mdi-logout
                </v-icon>
                Logout
              </v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <v-container>
      <v-navigation-drawer class="my-nav-bar" v-model="drawer" :color="color" :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant" :right="right" :permanent="permanent" :src="bg" absolute dark>
        <v-list dense nav class="py-0">

          <v-img height="200" src="" aspect-ratio="1.7" contain></v-img>

          <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <div class="ml-4">
        <router-view></router-view>
      </div>

    </v-container>

  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-home', path: '/dashboard/' },
        { title: 'Users', icon: 'mdi-account-group', path: '/dashboard/users' },
        { title: 'Chart Manager', icon: 'mdi-chart-bar', path: '/dashboard/chart' },
        { title: 'Working Times', icon: 'mdi-lan', path: '/working-times' },
        { title: 'Help', icon: 'mdi-help-circle', path: '/dashboard/forum' },
      ],
      color: 'primary',
      colors: [
        'primary',
        'blue',
        'success',
        'red',
        'teal',
      ],
      right: false,
      permanent: true,
      miniVariant: true,
      expandOnHover: true,
      background: false,
      fixed: true
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
.my-nav-bar {
  position: fixed;
}
</style>