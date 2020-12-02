<template>
  <div class="page-container careers-container px-5 px-sm-10 ">
    <v-container class="h-full row-flex align-center white--text">
      <!-- Header -->
      <div
        class="text-center py-4 coming-soon"
        data-aos="fade-down"
        data-aos-duration="500"
        style="border: 1px solid white; flex-grow: 1; transition: all 0.25s;"
      >
        <h2 class="text-center">
          There are currently no vacancies, however we always welcome new talent!<br/>
          <h6 class="font-weight-regular">Drop your CV/resume at careers@devorbis.com</h6>
        </h2>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'careers',
  metaInfo: {
    title: 'Careers | Devorbis'
  }
}
</script>

<style>
  .coming-soon {
    position: relative;
    overflow: hidden; 
  }
  /* Shine */
  .coming-soon:after {
    content:'';
    top:0;
    transform:translateX(100%);
    width:100%;
    height:220px;
    position: absolute;
    z-index:1;
    animation-name: slide;
    animation-duration: 1s;
    animation-delay: 1s;
    
    /* 
    CSS Gradient - complete browser support from http://www.colorzilla.com/gradient-editor/ 
    */
    background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(128,186,232,0) 99%, rgba(125,185,232,0) 100%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(50%,rgba(255,255,255,0.7)), color-stop(99%,rgba(128,186,232,0)), color-stop(100%,rgba(125,185,232,0))); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.7) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.7) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* Opera 11.10+ */
    background: -ms-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.7) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* IE10+ */
    background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.7) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
  }

  /* animation */

  @keyframes slide {
    0% {transform:translateX(-100%);}
    100% {transform:translateX(100%);}
  }
</style>