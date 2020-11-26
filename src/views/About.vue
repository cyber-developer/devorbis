<template>
  <div class="page-container about-container py-5 pa-sm-10">
    <div class="overlay"></div>
    <v-container class="h-100 col-flex content">
      <!-- ABOUT -->
      <div class="row-flex mb-10 align-center" data-aos="fade-down" data-aos-duration="500">
        <div class="brown--text text--darken-1">
          <h1 class="size-48 text-center mb-3">About Us</h1>
          <h4 class="text-justify">
            Devorbis is one of the younger initiatives in digital world. Based in Pakistan with the focus of empowering you
            with power solutions using modern techniques. Keeping ourselves updated with modern approaches, new designs and solutions to tackle
            new age problems for you.<br/>
            We are powered by very energetic and passionate group of Millennials. We are continuously evolving our processes, thinking and 
            research to become the absolute best.
            Our mission is to join you in your initiatives and covert your exciting Ideas into Reality.
          </h4>
        </div>
        <!-- <div v-if="$vuetify.breakpoint.mdAndUp" class="diamond-container col-flex align-center">
        </div> -->
      </div>
      <!-- LEADERS -->
      <div data-aos="fade-up" data-aos-duration="500">
        <h2 class="brown--text text--darken-4 mb-4 mb-sm-4">Our Team</h2>
        <v-layout wrap :class="$vuetify.breakpoint.xs && 'justify-center'">
          <v-card
            class="mr-5 mb-4 leader-card"
            width="280"
            height="380"
            v-for="(item, i) of team"
            :key="i" style="background-color: rgba(255,255,255,.8)"
          >
            <v-card-text class="py-10 grey--text text--darken-3">
              <v-layout column align-center>
                <v-avatar class="mb-10 elevation-1" size="130">
                  <img :src="item.image" style="object-fit: cover; object-position: center top" />
                </v-avatar>
                <h2 class="mb-2 mt-8">{{item.name}}</h2>
                <h4>{{item.position}}</h4>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "about-us",
  data: () => ({
    team: [
      {name: 'Salman Sabir', position: 'CEO, Co-Founder', image: require('@/assets/images/leader1.png')},
      {name: 'Muhammad Amir', position: 'CTO, Co-Founder', image: require('@/assets/images/leader2.png')},
      {name: 'Hamza Aman', position: 'Software Engineer', image: require('@/assets/images/member3.jpg')},
      {name: 'Danial Ahmad', position: 'Software Engineer', image: require('@/assets/images/member4.jpg')},
    ]
  })
}
</script>

<style lang="scss" scoped>
.diamond-container {
  padding: 0 0px 0px 100px;
}
.content {
  position: relative;
  z-index: 2;
}
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  // background-image: url('~@/assets/images/bg2.jpg');
  background-size: cover;
  opacity: 0.3;
  pointer-events: none;
  z-index: 1;
}
.container {
  max-width: 1500px;
  margin: 0 auto !important;
}
.leader-card {
  border-top: 5px solid #947269;
  position: relative;
  z-index: 2;
}
</style>