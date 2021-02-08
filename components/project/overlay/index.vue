<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card
        v-if="dialog && project"
      >
        <v-card-title
          class="text--primary"
        >
          {{ project.titel }}
          <v-spacer />
          <v-btn
            small
            icon
            depressed
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider />
        <v-list
          class="text--primary grey lighten-5 pt-3"
        >
          <project-list-element
            icon="mdi-content-paste"
            tooltip="Beschreibung"
            :content="project.beschreibung"
          />

          <project-list-element
            icon="mdi-account-box-outline"
            tooltip="Ansprechpartner"
            :content="contactPerson"
          />

          <project-list-element
            icon="mdi-hand-pointing-up"
            tooltip="Ziele"
            :content="project.ziele"
          />

          <project-list-element
            icon="mdi-calendar-start"
            tooltip="Beginn"
            :content="start"
          />

          <project-status-element
            :project="project"
          />
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import ProjectListElement from '~/components/project/overlay/list-element.vue'
import ProjectStatusElement from '~/components/project/overlay/status-element.vue'
import type { ProjectInterface } from '~/entities/project/project.types'

@Component({
  components: {
    ProjectListElement,
    ProjectStatusElement
  }
})
export default class ProjectOverlay extends Vue {
  @Prop({ default: false }) value!: boolean
  @Prop({ default: null }) project!: ProjectInterface | null

  get dialog (): boolean {
    return this.value
  }

  set dialog (value: boolean) {
    this.$emit('input', value)
  }

  get contactPerson (): string {
    return this.project
      ? this.project.ansprechpartner.join(', ')
      : ''
  }

  get start (): string {
    if (this.project === null) {
      return ''
    }

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    return this.project.beginn
      ? (new Intl.DateTimeFormat('de', options)).format(new Date(this.project.beginn))
      : '-/-'
  }
}
</script>
