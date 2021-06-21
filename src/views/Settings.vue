<template>
  <v-app>
    <v-switch v-model="$vuetify.theme.dark" color="orange" label="Dark Mode"
              style="margin: 15px 15px 0 20px; display: block"/>
    <v-autocomplete label='Country' :items=countries item-text=countryName item-value=countryId style="margin: 0 15px 0 20px; width: 400px"></v-autocomplete>
  </v-app>
</template>

<script>
import {getCountries} from "@/types/CountryGetter.js";

export default {
  name: "Settings",
  data: () => ({
    countries: null
  }),
  mounted() {
    getCountries().then(value => this.countries = value);
  }
}
</script>
