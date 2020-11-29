<template>
  <v-navigation-drawer
    :permanent="$vuetify.breakpoint.mdAndUp"
    app
    width="175"
    style="z-index: 99999999"
    v-model="drawer"
  >
    <v-flex class="indigo-dark h-100 relative">
      <!-- CONTENT -->
      <div class="col-flex pa-5 pt-10 align-center">
        <img 
          class="pointer"
          width="120" 
          src="@/assets/images/logo_text.png"
          @click="$router.push('/')"
        />
        <v-layout class="menubar mt-8" column>
          <div 
            class="menu-item text-center my-5 pointer"
            :class="$route.path === item.link && 'active'"
            @click="$router.push(item.link)"
            v-for="(item, i) of menuItems" :key="i"
          >
            <div class="menu-icon-container row-flex justify-center align-center">
              <v-icon class="menu-icon" color="white">{{item.icon}}</v-icon>
            </div>
            <h4 class="white--text weight4">{{item.name}}</h4>
          </div>            
        </v-layout>
      </div>
      <!-- CUBE ANIMATION -->
      <div class="cube-container">
        <div :class="`cube-x cube-x-${n}`" v-for="n in 15" :key="n">
          <div class="cube-y">
            <div class="cube white--text">
            </div>
          </div>
        </div>
      </div>
    </v-flex>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'nav-drawer',
  props: ['state'],
  data: () => ({
    drawer: null,
    menuItems: [
      {name: 'Home', icon: 'mdi-home', link: '/'},
      {name: 'About Us', icon: 'mdi-information-outline', link: '/about'},
      {name: 'Services', icon: 'mdi-face-agent', link: '/services'},
      {name: 'Projects', icon: 'mdi-view-list', link: '/projects'},
      {name: 'Careers', icon: 'mdi-briefcase-outline', link: '/careers'},
      {name: 'Contact Us',icon: 'mdi-card-account-phone', link: '/contact'},
    ],
  }),
  watch: {
    'state': function(val) {
      this.drawer = val;
    },
    'drawer': function(val) {
      this.$emit('onChange', val);
    }
  }
}
</script>

<style>

</style>