<template>
  <v-container>
    <v-row justify='center'>
      <v-col cols='auto' align-self="center">
        <v-text-field v-model.number=dogNumber style="width: auto" label="Number of dogs" type="number"
                      :rules="[v=>Number.isInteger(v), v=>v>0]" v-on:keyup.enter="outputDogs"/>
      </v-col>
      <v-col cols='auto' align-self="center">
        <v-btn v-on:click=outputDogs style="display: block; margin: auto">SHOW DOGS</v-btn>
      </v-col>
    </v-row>
    <v-data-table :items-per-page="15" :headers=headers :items=dogOutput class="elevation-1"
                  :footer-props="{showFirstLastPage: true, firstIcon: 'mdi-arrow-collapse-left', lastIcon: 'mdi-arrow-collapse-right'}"
                  :loading=loadingDogs :search="search">
      <template v-slot:top>
        <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.lifeSpan="slotProps">
        <v-chip :color=getChipColor(slotProps.item.lifeSpan) style="width:60px; justify-content: center"><p
            style="margin: auto 0; color: #FFFFFF">{{ slotProps.item.lifeSpan }}</p>
        </v-chip>
      </template>
      <template v-slot:item.url="slotProps">
        <a target="_blank" :href="slotProps.item.url">
          <img class="dog-image" :src="slotProps.item.url" :alt="slotProps.item.name"/>
        </a>
      </template>
      <template v-slot:item.temperament="slotProps">
        {{ slotProps.item.temperament.join(', ') }}
      </template>
      <template v-slot:item.origin="slotProps">
        {{ slotProps.item.origin.join(', ') }}
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import {getDogs} from "../types/DogGetter";

export default {
  name: 'DogDisplay',

  data: () => ({
    search: '',
    dogNumber: 10,
    loadingDogs: false,
    dogOutput: [],
    headers: [{text: 'Name', value: 'name'},
      {text: 'Weight (kg)', value: 'weight'},
      {text: 'Height (cm)', value: 'height'},
      {text: 'Life Span (years)', value: 'lifeSpan'},
      {text: 'Temperament', value: 'temperament'},
      {text: 'Image', value: 'url', sortable: false}],
  }),

  methods: {
    outputDogs() {
      if (this.dogNumber > 500) alert("That's too many dogs!")
      else {
        this.loadingDogs = true;
        getDogs(this.dogNumber).then(value => {
          this.dogOutput = value;
          this.loadingDogs = false;
        });
      }
    },
    getColor(lifeSpan) {
      const maxLifeSpan = Math.max.apply(null, this.dogOutput.map(d => d.lifeSpan));
      const minLifeSpan = Math.min.apply(null, this.dogOutput.map(d => d.lifeSpan));
      const i = (lifeSpan - minLifeSpan) / (maxLifeSpan - minLifeSpan);
      const c = -1.4;
      const r = Math.round(Math.sin(c * i) * 127 + 178);
      const g = Math.round(Math.sin(c * i + 4) * 127 + 128);
      const b = Math.round(Math.sin(c * i + 2.4) * 127 + 50);
      return [r, g, b];
    },
    getChipColor(lifeSpan) {
      const [r, g, b] = this.getColor(lifeSpan);
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  }
}
</script>
<style>
.dog-image {
  width: 70px;
  height: 70px;
  object-fit: cover;
  display: block;
  margin: auto 30px auto auto;
  padding: 3px
}

.dog-image:hover {
  transform: scale(2.2);
}
</style>
