import { Project } from '~/entities/project/project'
import { ProjectInterface } from '~/entities/project/project.types'
import { ProjectRepositoryInterface } from '~/services/project-repository/project-repository.types'

export class ProjectRepository implements ProjectRepositoryInterface {
  constructor (private readonly data: ProjectInterface[]) {
    this.data = data
  }

  getAll (): ProjectInterface[] {
    return this.data.map(elem => new Project(elem))
  }

  getOne (uuid: string): Project | undefined {
    const project = this.data.find(elem => elem.uuid === uuid)
    if (project) {
      return new Project(project)
    }
  }
}
