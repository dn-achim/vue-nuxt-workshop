<template>
  <v-row>
    <v-col cols="12">
      <v-card v-if="project">
        <v-card-title>
          <h1>{{ project.titel }}</h1>
        </v-card-title>
        <v-card-text
          class="body-1"
        >
          <p>
            {{ project.beschreibung }} {{ tab }} {{ typeof tab }}
          </p>
        </v-card-text>
        <v-tabs
          v-model="tab"
          show-arrows
          :vertical="$vuetify.breakpoint.mdAndUp"
        >
          <v-tab>
            <v-icon left>
              mdi-information-outline
            </v-icon>
            Übersicht
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-timeline-clock-outline
            </v-icon>
            Historie
          </v-tab>
          <v-tab>
            <v-icon left>
              mdi-folder-multiple-image
            </v-icon>
            Medien
          </v-tab>
          <v-spacer />
          <v-tab
            nuxt
            to="/project"
          >
            <v-icon left>
              mdi-backspace-outline
            </v-icon>
            Zurück
          </v-tab>

          <v-tab-item>
            <project-detail-intro
              :project="project"
            />
          </v-tab-item>

          <v-tab-item>
            <project-detail-timeline
              :project="project"
            />
          </v-tab-item>

          <v-tab-item>
            <project-detail-carousel
              :project="project"
            />
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProjectDetailCarousel from '~/components/project/detail/carousel/index.vue'
import ProjectDetailIntro from '~/components/project/detail/intro.vue'
import ProjectDetailTimeline from '~/components/project/detail/timeline.vue'
import { ProjectInterface } from '~/entities/project/project.types'
import { provider } from '~/services/provider/provider'

@Component<ProjectDetailView>({
  components: {
    ProjectDetailCarousel,
    ProjectDetailIntro,
    ProjectDetailTimeline
  },
  metaInfo () {
    return {
      title: `Projekt: ${this.project?.titel}`
    }
  }
})
export default class ProjectDetailView extends Vue {
  tab = 'info'

  get uuid () {
    return this.$route.params.uuid
  }

  get projectRepository () {
    return provider().projectRepository
  }

  get project (): ProjectInterface | undefined {
    return this.uuid
      ? this.projectRepository.getOne(this.uuid)
      : undefined
  }

  mounted () {
    this.tab = 'info'
    if (this.project === undefined) {
      this.$router.push({
        name: 'error',
        params: {
          errorMessage: `Das Projekt [${this.uuid || 'n/a'}] konnte leider nicht gefunden werden`
        }
      })
    }
  }
}
</script>

<style lang="sass"
       scoped>
.v-tabs--vertical
  .v-tab
    justify-content: start
</style>
