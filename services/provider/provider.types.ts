import { ProjectRepositoryInterface } from '~/services/project-repository/project-repository.types'
import { ProjectSearchInterface } from '~/services/project-search/project-search.types'

export interface ProviderInterface {
  projectRepository: ProjectRepositoryInterface;
  projectSearch: ProjectSearchInterface;
}
