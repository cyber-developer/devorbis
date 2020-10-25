<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn
        color="primary"
        :small="$vuetify.breakpoint.xs"
        v-on="on"
      >
        Request a Quote
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="d-flex justify-space-between">
        <span class="primary--text">Request a Quote</span>
        <v-icon @click="dialog = false">mdi-close</v-icon>
      </v-card-title>
      <v-form
        ref="form"
        v-model="valid"
        class="pa-4"
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
        <v-text-field
          v-model="form.phone"
          placeholder="Phone (optional)"
          outlined
          dense
        />
        <v-text-field
          v-model="form.company"
          placeholder="Company/Organization (optional)"
          outlined
          dense
        />
        <v-textarea
          v-model="form.message"
          placeholder="Let us know what you are looking for"
          outlined
          dense
          :rules="[val => !!val || 'required']"
          validate-on-blur
          required
        />
      </v-form>
      <v-card-actions>
        <v-btn :loading="loading" class="ml-auto" @click="submit" color="primary">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import api from '@/services/restService';

export default {
  name: 'quote-form',
  data: () => ({
    dialog: false,
    valid: null,
    form: {},
    loading: false
  }),
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true;
        api.post('/quote', this.form)
          .then(res => {
            this.dialog = false;
            this.$toasted.success("Request sent successfully!", { duration: 5000 });
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