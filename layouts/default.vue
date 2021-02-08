<template>
  <v-app>
    <navigation-main />
    <v-main>
      <v-container>
        <v-scroll-x-transition
          mode="out-in"
        >
          <nuxt />
        </v-scroll-x-transition>
      </v-container>
    </v-main>
    <navigation-footer />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import NavigationMain from '../components/navigation/main.vue'
import NavigationFooter from '../components/navigation/footer.vue'

@Component({
  components: {
    NavigationMain,
    NavigationFooter
  }
})
export default class DefaultLayout extends Vue {
}
</script>
