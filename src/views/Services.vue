<template>
  <div class="page-container services-container pa-sm-10">
    <!-- <div class="overlay" style="z-index:1"></div> -->
    <v-container class="minH-100 row-flex justify-center relative" style="z-index:90">
      <div class="grey--text text--darken-2 mt-5 mt-sm-0" data-aos="zoom-in">
        <h1
          class=" text-center"
          :class="$vuetify.breakpoint.mdAndUp && 'size-48'"
        >Our Services</h1>
        <div align="center">
          <h4 class=" mb-10 text-justify mt-2 weight4" style="max-width: 700px">
            We are commited to provide best quality services for you. Whether you have an exciting idea
            for your Startup or you want to improve daily business activities with speed and efficiency.
            We got your back.
          </h4><br/>
        </div>
        <v-layout wrap justify-center>
          <v-flex v-for="(item, i) of services" :key="i" xs4 style="max-width: fit-content !important" class="px-5">
            <v-hover>
              <template v-slot="{ hover }">
                <v-card width="250" height="250" class="my-10 pointer" :elevation="hover ? 24 : 5">
                  <v-card-text>
                    <!-- image -->
                    <div
                      align="center"
                      class="mb-10 relative border-gradient"
                      :class="`gradient-${i}`"
                      style="margin-top: -30%"
                    >
                      <v-avatar
                        class="white"
                        :class="`flip-animation-${i}`"
                        size="100"
                        style={}
                      >
                        <img style="width: auto; height: 70px" :src="item.icon" />
                      </v-avatar>
                    </div>
                    <!-- title -->
                    <h3 class="mb-2" align="center">{{item.name}}</h3>
                    <!-- description -->
                    <h5>
                      <div v-for="(record, r) in item.description" :key="r">
                        <span v-if="record.title" class="font-weight-bold">{{record.title}}: </span>
                        <span class="">{{record.text}}</span>
                      </div>
                    </h5>
                  </v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'services',
  metaInfo: {
    title: 'Services | Devorbis'
  },
  data: () => ({
    services: [
      {name: 'Web Apps', icon: require('@/assets/images/monitor.png'), description: 
      [
        {title: 'Frameworks and Libraries', text: 'Angular js, Vue js, React js'},
        {title: 'Core Skills', text: 'HTML5, CSS3, JS, TS, ES6'},
        {title: 'UI Libraries', text: 'Bootstrap, Material CSS, Vuetify, Ant Design and More'}
      ]},
      {name: 'Mobile Apps', icon: require('@/assets/images/phone.png'), description: 
      [
        {title: 'Frameworks', text: 'React Native, Flutter, Native Script'},
        {title: 'Platforms', text: 'Android, IOS'},
      ]},
      {name: 'Desktop Apps', icon: require('@/assets/images/computer.png'), description: [
        {title:'Framework', text: 'Electron js'},
        {title:'Platforms', text: 'Windows, Linux, Mac OS'},
        {title:'Includes', text: 'Packaging, Deployments, Setups'}
      ]},
      {name: 'Backend Server', icon: require('@/assets/images/server.png'), description:[
        {title:'Technologies', text: 'Node js, Express js, Graph QL, MS SQL, Mongo DB, Postgres DB'},
        {title:'Deployment', text: 'AWS, Google Cloud, Azure'}
      ]},
      {name: 'Architecure Designs', icon: require('@/assets/images/museum.png'), description: [
        {text: 'Invloves careful analysis of the problems and making decisions regarding choice of Databse, Server, Devops, Backend and Frontend Architecture'}
      ]},
      {name: 'Serverless Apps', icon: require('@/assets/images/database.png'), description: [
        {title:'Technologies', text: 'Firebase, AWS Lambda, AWS APIGateway'}
      ]},
    ]
  })
}
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-image: url('~@/assets/images/bg5.jpg');
  background-size: cover;
  opacity: 0.2;
  pointer-events: none;
}
@for $item from 0 through 6 {
  .flip-animation-#{$item} {
    animation-name: flip;
    animation-duration: #{random(5) + 10} + s;
    animation-delay: #{random(20)} + s ;
    animation-iteration-count: infinite;
    animation-direction: normal;
  }
  @keyframes flip {
    20%, 100% {
    transform: rotateY(360deg);
    }
    0% {
    }
    10% {
    }
  }
}
.border-gradient {
  position: relative;
  z-index: 200;

  .v-avatar {
    z-index: 3 !important;
  }
}
.border-gradient::before {
  z-index: 1;
  content: '';
  position: absolute;
  transform: translateX(49%) translateY(-4%);
  top: 0;
  left: 0;
  height: 110px;
  width: 110px;
  border-radius: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.gradient-0.border-gradient::before {
  background: -webkit-linear-gradient(left top, #1A6DFF 0%, #C822FF 100%);
}
.gradient-1.border-gradient::before {
  background: -webkit-linear-gradient(left top, #ECC84E 0%, #45C595 100%);
}
.gradient-2.border-gradient::before {
  background: -webkit-linear-gradient(left top, #2AF598 0%, #009EFD 100%);
}
.gradient-3.border-gradient::before {
  background: -webkit-linear-gradient(left top, #FF5C4D 0%, #FFA134 100%);
}
.gradient-4.border-gradient::before {
  background: -webkit-linear-gradient(left top, #D9E021 0%, #C822FF 100%);
}
.gradient-5.border-gradient::before {
  background: -webkit-linear-gradient(left top, #E5B2CA 0%, #7028E4 100%);
}
</style>