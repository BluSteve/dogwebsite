<template>
  <v-container class="mt-4">
    <v-row justify='center'>
      <v-data-table :headers=headers :items=projects class="elevation-1"
                    @click:row="handleClick">
      </v-data-table>
    </v-row>
    <v-row justify='center' class="mt-4">
      <v-btn v-if=isAdmin @click=openProjectDialog>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-row>
    <v-dialog v-model=projectDialog width=unset>
      <v-card class="pa-4">
        <v-text-field label="Project name" v-model=pname required/>
        <v-btn @click=addProject>
          Add
        </v-btn>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import {addProject, getProjects} from "../types/ProjectController";
import {Project, store} from "../types/OctopiTypes";
import {getIsAdmin} from "../types/UserController";

export default {
  name: 'ProjectDisplay',

  data: () => ({
    projects: [],
    headers: [{text: 'PID', value: 'pid'},
      {text: 'Name', value: 'pname'},
      {text: 'Date Created', value: 'cdate'}],
    isAdmin: false,
    projectDialog: false,
    pname: ''
  }),

  async mounted() {
    this.isAdmin = await getIsAdmin();
    this.projects = await getProjects();
  },

  methods: {
    handleClick(item) {
      this.$router.push({name: 'project', params: {pid: item.pid}});
    },
    openProjectDialog() {
      this.projectDialog = true;
    },
    async addProject() {
      if (await addProject(this.pname) === 200) alert("Project added!");
    }
  }
}
</script>
