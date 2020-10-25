<template>
  <div class="page-container contact-container py-5 pa-sm-10">
    <v-container class="h-100 white--text">
      <!-- Header -->
      <div class="text-center" data-aos="fade-down" data-aos-duration="500">
        <h1 class="size-48 text-center ">Get in touch with us!</h1>
        <p class="mb-5 mx-auto" style="max-width: 550px">
          Email us with any questions or inqueries or call <span style="white-space: pre">+92 333 5349693</span>. We would be
          happy to answer your questions and set up a meeting with you. We always love
          to hear from you.
        </p>
      </div>
      <!-- FORM -->
      <div data-aos="fade-up" data-aos-duration="500" class="mx-auto" style="max-width: 800px">
        <v-form
          ref="form"
          v-model="valid"
          class="pa-10 white"
          style="border-radius: 4px"
        >
          <v-text-field
            v-model="form.name"
            placeholder="Full Name"
            outlined
            dense
            :rules="[val => !!val || 'required']"
            validate-on-blur
            required
          />
          <v-text-field
            v-model="form.email"
            placeholder="Email"
            outlined
            dense
            required
            validate-on-blur
            :rules="[
              val => !!val || 'required',
              v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid',
            ]"
            type="email"
          />
          <v-textarea
            v-model="form.message"
            placeholder="Let us know your queries"
            outlined
            dense
            :rules="[val => !!val || 'required']"
            no-resize
            validate-on-blur
            required
          />
          <div align="center">
            <v-btn :loading="loading" class="ml-auto" @click="submit" color="primary">Submit</v-btn>
          </div>
        </v-form>
      </div>
    </v-container>
  </div>
</template>

<script>
import api from '@/services/restService';

export default {
  name: 'contact-us',
  data: () => ({
    valid: null,
    form: {},
    loading: false
  }),
   methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true;
        api.post('/contact', this.form)
          .then(res => {
            this.$refs.form.reset();
            this.$toasted.success("Message sent successfully!", { duration: 5000 });
          })
          .catch(err => {
            this.$toasted.error("oops! something went wrong", { duration: 5000 });
          })
          .finally(() => this.loading = false)
      }
    }
  }
}
</script>

<style>

</style>