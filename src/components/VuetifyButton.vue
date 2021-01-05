<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <v-app>
      <v-main>
        <v-card
          max-width="344"
        >
          <v-card-text>
            <div>Word of the Day</div>
            <p class="display-1 text--primary">
              el·ee·mos·y·nar·y
            </p>
            <p>adjective</p>
            <div class="text--primary">
              relating to or dependent on charity; charitable.<br>
              "an eleemosynary educational institution."
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="teal accent-4"
              @click="reveal = true"
            >
              Learn More
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              <v-card-text class="pb-0">
                <p class="display-1 text--primary">
                  Origin
                </p>
                <p>late 16th century (as a noun denoting a place
                  where alms were distributed): from medieval
                  Latin eleemosynarius, from late Latin eleemosyna
                  ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="teal accent-4"
                  @click="reveal = false"
                >Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'VuetifyExample',
  data: () => ({
    reveal: false,
  }),
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module lang="scss">
.blue {
  color: rgba(13, 13, 192, 1);
}
</style>
<style lang="scss">
.v-application .v-application--wrap {
  min-height: initial;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
<style scoped src="../../node_modules/vuetify/dist/vuetify.min.css">
</style>
