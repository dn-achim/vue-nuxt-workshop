<template>
  <v-app-bar
    app
  >
    <div
      class="d-flex align-center"
    >
      <v-img
        alt="digitalnoise GmbH Logo"
        class="shrink mr-5"
        contain
        :src="require('../../assets/logo.png')"
        transition="scale-transition"
        width="100"
      />
    </div>

    <v-toolbar-title>
      Projekte
    </v-toolbar-title>

    <template v-slot:extension>
      <v-tabs
        class="pl-14"
        style="flex-basis: 70%"
      >
        <v-tab
          to="/"
          nuxt
        >
          Home
        </v-tab>
        <v-tab
          to="/project"
          nuxt
        >
          Projekte
        </v-tab>
      </v-tabs>
      <div style="flex-basis: 30%">
        <portal-target name="searchbar"></portal-target>
      </div>
    </template>
  </v-app-bar>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NavigationMain extends Vue {
}
</script>
