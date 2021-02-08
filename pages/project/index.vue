<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1>
          Projektliste
        </h1>
      </v-col>
    </v-row>
    <project-list
      :projects="filtered"
    />

    <portal to="searchbar">
      <v-text-field
        v-model="phrase"
        hide-details
        single-line
        append-outer-icon="mdi-magnify"
        placeholder="In Projekten suchen"
      />
    </portal>

    <project-overlay />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { provider } from '~/services/provider/provider'
import ProjectList from '~/components/project/list.vue'
import ProjectOverlay from '~/components/project/overlay/index.vue'
import { ProjectInterface } from '~/entities/project/project.types'
import { SearchResultInterface } from '~/entities/search-result/search-result.types'

@Component({
  components: {
    ProjectList,
    ProjectOverlay
  },
  metaInfo: {
    title: 'Projekte'
  }
})
export default class ProjectListView extends Vue {
  phrase = ''

  get projectSearch () {
    return provider().projectSearch
  }

  get filtered (): ProjectInterface[] {
    return this
      .projectSearch
      .filter(this.phrase)
      .map((elem: SearchResultInterface) => elem.item)
  }
}
</script>
