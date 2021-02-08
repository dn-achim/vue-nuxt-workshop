<template>
  <div>
    <v-row>
      <v-col
        v-for="(project, idx) in projects"
        :key="idx"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <project-card
          :project="project"
          @show-overlay="onShowOverlay"
        />
      </v-col>
    </v-row>
    <project-overlay
      v-model="show"
      :project="currentProject"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import ProjectCard from '~/components/project/card.vue'
import ProjectOverlay from '~/components/project/overlay/index.vue'
import type { ProjectInterface } from '~/entities/project/project.types'

@Component({
  components: {
    ProjectCard,
    ProjectOverlay
  }
})
export default class ProjectList extends Vue {
  @Prop({
    type: Array,
    default: () => []
  }) readonly projects!: ProjectInterface[]

  currentProject: ProjectInterface | null = null
  show = false

  onShowOverlay (project: ProjectInterface) {
    this.currentProject = project
    this.show = true
  }
}
</script>
