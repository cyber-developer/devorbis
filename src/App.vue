<template>
  <v-app>
    <!-- NAVIGATION DRAWER -->
    <!-- Hamburger menu -->
    <div v-if="$vuetify.breakpoint.smAndDown" class="ham-overlay"></div>
    <div
      v-if="$vuetify.breakpoint.smAndDown"
      class="ham-container col-flex align-center"
      @click="drawerState = !drawerState"
      :class="drawerState && 'active'"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
    <NavDrawer @onChange="drawerState = $event" :state="drawerState" app/>
    <!-- CONTENT -->
    <v-content app>
      <v-layout class="main-wrapper">
        <!-- PANEL 1 -->
        <!-- PANEL 2 -->
        <v-flex class="flex-grow-1 col-flex">
          <transition
            name="fade"
          >
            <router-view></router-view>
          </transition>
        </v-flex>
      </v-layout>
    </v-content>
    <v-footer class="black white--text justify-center" style="z-index: 10000000">
      2020 © Copyrights Devorbis - All rights reserved
    </v-footer>
  </v-app>
</template>

<script>
import NavDrawer from './components/NavDrawer';
import '@/assets/main.scss';

export default {
  name: 'App',

  metaInfo: {
    title: 'Devorbis | Software Development Agency'
  },

  components: {
    NavDrawer,
  },

  data: () => ({
    activeItem: 1,
    drawerState: false
  }),
};
</script>

<style lang="scss">
.fade-enter-active {
  z-index: 999;
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
}
.ham-container {
  position: absolute;
  top: 17px;
  right: 17px;
  z-index: 99999999999999999;

  .v-icon {
    z-index: 99999999999;
    border-radius: 2px;
  }

  div {
    position: relative;
    height: 2px;
    min-height: 2px;
    width: 25px;
    border-radius: 2px;
    background-color: white;
    transition: all .25s;
    z-index: 9999999999999;
  }

  div:nth-child(1) {
    top: 0px;
  }
  div:nth-child(2) {
    top: 5px;
    transition: all .5s;
  }
  div:nth-child(3) {
    top: 10px;
  }
}

.ham-container.active {
  
  div:nth-child(1) {
    transform: rotateZ(-45deg);
    top: 8px;
  }
  div:nth-child(2) {
    transform: translateX(-40px) rotateZ(360deg); 
    height: 0px;
    opacity: 0;
  }
  div:nth-child(3) {
    transform: rotateZ(45deg);
    top: 4px;
  }
}

.ham-overlay {
  position: absolute;
  border-radius: 5px;
  right: 10px;
  top: 10px;
  height: 31px;
  width: 39px;
  background-color: rgba($color: #000000, $alpha: 0.2);
  z-index: 999999999999;
}

.ham-overlay, .ham-container {
  // transform: scale(0.6);
}
</style>