<template>
  <v-card flat>
    <v-card-title>
      <h3>Übersicht</h3>
    </v-card-title>
    <v-card-text class="body-2">
      <p>
        Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus,
        vitae
        iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non
        adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
        imperdiet,
        leo. Nunc sed turpis.
      </p>

      <p>
        Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus,
        vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu
        tristique
        sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet
        ligula
        pharetra condimentum.
      </p>

      <p>
        Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam
        commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu
        nunc.
      </p>

      <p>
        Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede.
        Duis leo. Fusce fermentum odio nec arcu.
      </p>

      <p>
        Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum
        et,
        tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a,
        condimentum nec, nisi.
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ProjectDetailIntro extends Vue {
}
</script>
