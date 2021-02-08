import data from '~/data/projects.json'
import { ProjectRepository } from '~/services/project-repository/project-repository'
import { ProviderInterface } from '~/services/provider/provider.types'
import { ProjectSearch } from '~/services/project-search/project-search'

const projectRepository = new ProjectRepository(data)

export const provider = (): ProviderInterface => ({
  projectRepository,
  projectSearch: new ProjectSearch(projectRepository)
})
