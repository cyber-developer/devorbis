<template>
  <div class="page-container project-detail-container pa-0">
    <div class="minH-full col-flex" v-if="project">
      <!-- CAROUSEL -->
      <v-carousel v-model="model" class="grey darken-4" :height="$vuetify.breakpoint.xs && project.layout !== 'mobile' ? '300' : '450'">
        <v-carousel-item
          v-for="img in project.images" :key="img"
          :src="require( `@/assets/images/${project.base}/${img}`)"
        >
          <img class="bg-img" :src="require( `@/assets/images/${project.base}/${img}`)" />
        </v-carousel-item>
      </v-carousel>
      <!-- DETAILS -->
      <div class="grey lighten-5 grey--text text--darken-2 pa-5">
        <h2 class="mb-2">{{project.title}}</h2>
        <p class="weight4" v-html="project.description">
        </p>
      </div> 
    </div>
  </div>
</template>

<script>
import projects from '@/data/projects';

export default {
  name: 'project-detail',
  props: ['data'],
  data: () => ({
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
    model: 0,
    payload: {
      images: ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'],
      description: `This project is a Health Care Management system for a well established home care services provider.
          Having 1000+ registered caregivers. This website was built with the aim to automate their daily tasks
          more efficiently and with great speed and ease. The system has a portal for both caregivers and care seekers.<br/>
          In order to overcome such a vast number of usecases for a system of this scale. We needed  very flexible architecture.
          So we studies various usecases and come with the following technologies to tackle various issues<br/>
          <ul class="mt-2">
            <li>Vue js for fast development, speed and flexible nature</li>
            <li>AWS Cognito: for handling authentication, authorization</li>
            <li>AWS RDS: with SQL as our db structure defined, strict and has a lot of relations</li>
            <li>Node js for fast backend and since there was not majore processing at the backend</li>
            <li>Gitlab for version control</li>
            <li>Deployment on AWS EC2</li>
            <li>Other libraries include Express js, Vuetify, JWT, Sequelize</li>
          </ul>`
    }
  }),
  computed: {
    project: function() {
      let id = this.$route.params.id;
      return projects.find(item => item.id === id)
    }
  }

}
</script>

<style>
.project-detail-container .v-image__image {
  background-size: contain !important;
  z-index: 3;
}
.bg-img {
  z-index: 2;
  
  filter: blur(8px);
  -webkit-filter: blur(8px);
  opacity: 0.8;
  
  height: 100%;
  width: 100%;

  object-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
}
</style>