<template>
  <div class="page-container home-container px-sm-10 pa-sm-10">
    <div class="overlay"></div>
    <v-container class="minH-full row-flex align-center" style="z-index: 5; position: relative">
      <v-layout :wrap="$vuetify.breakpoint.smAndDown">
        <div class="white--text">
          <h1
            class="mt-5 mt-sm-0 dname"
            data-aos="fade-down"
            aos-duration="300"
            data-aos-delay="1"
          >Welcome to <br/>Dev<span class="color-primary">o</span>rbis</h1>
          <h2 class="mb-2" data-aos="fade-down" data-aos-duration="300" data-aos-delay="300">We keep it simple for you</h2>
          <p class="mb-7 text-justify" data-aos="fade-down" aos-duration="300" data-aos-delay="600">
            We cover digital solutions for all screen sizes. Web apps, mobile apps, kiosk and desktop apps. 
            From effective designing to intelligent architecture
            and from efficient coding to robust testing, we perform all operations to provide you best quality. 
            We work hard to deliver a product which will boost your idea or business to maximum.
          </p>
          <div class="mt-3 row-flex" data-aos="slide-left" data-aos-duration="500">
            <span class="hvr-ripple-out mb-0">
              <v-btn @click="$router.push('/services')" :small="$vuetify.breakpoint.xs">
                <span class="primary--text">Our Services</span>
              </v-btn>
            </span>
            <span class="hvr-ripple-out ml-2">
              <QuoteForm />
              <!-- <v-btn color="primary" :small="$vuetify.breakpoint.xs">Request a Quote</v-btn> -->
            </span>
          </div>
        </div>
        <v-flex class="pa-5 pl-0 pl-sm-5 mt-5 mt-sm-0">
          <v-img src="@/assets/images/screens2.png" style="width: 450px"></v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import QuoteForm from '@/components/QuoteForm'

export default {
  name: 'Home',
  components: {
    QuoteForm
  }
}
</script>

<style scoped>
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-image: url('~@/assets/images/home-bg.png');
  background-size: cover;
  opacity: 0.3;
  pointer-events: none;
}
.container {
  max-width: 1500px;
  margin: 0 auto !important;
}
.dname {
  font-size: 48px;
}
@media only screen and (max-width: 500px) {
  .dname {
    font-size: 40px;
  }
}
</style>