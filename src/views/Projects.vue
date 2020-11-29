<template>
  <div class="page-container projects-container pa-10">
    <!-- <div class="overlay"></div> -->
    <v-container class="minH-100 col-flex align-center" data-aos="zoom-in">
      <h1 class="size-42 grey--text text--darken-3">We <v-icon size="50" color="red">mdi-heart</v-icon> our work</h1>
      <div class="mt-10 w-100 d-flex justify-center flex-wrap">
        <div
          style="max-width: fit-content"
          v-for="(item, i) of projects  " :key="i"
          class="pa-5"
        >
          <v-card width="300" min-height="250" class="pointer" style="height: 100%">
            <div class="relative header">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="require(`@/assets/images/${item.base}/cover.png`)"
              >
                <!-- :src="`../assets/images/${item.base}/cover.png`" -->
                <v-card-title>{{item.title}}</v-card-title>
              </v-img>
              <div class="case-study row-flex justify-center align-center">
                <span class="hvr-ripple-out">
                  <v-btn :to="`/project-detail/${item.id}`" color="white" outlined primary>View</v-btn>
                </span>
              </div>
            </div>
            <v-card-text>
              <div class="row-flex item-prop justify-center font-weight-bold">
                <p>{{item.type}}: {{item.title}}</p>
              </div>
              <v-layout justify-center>
                {{ item.technologies.join(', ') }}
                <!-- <v-icon class="mr-2" color="blue">mdi-react</v-icon>
                <v-icon class="mr-2" color="teal">mdi-nodejs</v-icon>
                <v-icon class="mr-2" color="red lighten-2">mdi-web</v-icon>
                <v-icon class="mr-2" color="orange">mdi-aws</v-icon> -->
              </v-layout>
              <!-- <div class="row-flex item-prop">
                <p>React js, Node js, AWS EC2</p>
              </div> -->
            </v-card-text>
            <!-- <v-card-text class="pt-0">
            </v-card-text> -->
          </v-card>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import projects from '@/data/projects';

export default {
  name: 'projects',
  metaInfo: {
    title: 'Projects | Devorbis'
  },
  data: () => ({
    projects
  })
}
</script>

<style lang="scss" scoped>
.v-card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  .case-study {
    transform: translateX(0%);
  }
}

.header {
  overflow: hidden;
}

.case-study {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 78, 78, 0.9);
  transform: translateX(100%);
  transition: all 0.25s;
}
</style>