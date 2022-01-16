<template>
  <v-app>
    <v-form>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-row>
              <v-col>
                <v-text-field v-model="firstname" label="First name"/>
              </v-col>
              <v-col>
                <v-text-field v-model="lastname" label="Last name"/>
              </v-col>
              <v-col>
                <v-text-field v-model="SSN" label="Social Security Number" type="number"/>
              </v-col>
            </v-row>
            <v-row>
              <v-textarea v-model="feedback" label="Your feedback matters to us!"/>
            </v-row>
            <v-row>
              <v-spacer/>
              <v-btn>Submit</v-btn>
            </v-row>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    firstname: "",
    lastname: "",
    SSN: 0,
    feedback: ""
  })
};
</script>
