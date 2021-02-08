import { ProjectInterface } from '~/entities/project/project.types'

export interface ProjectRepositoryInterface {
  getAll (): ProjectInterface[];

  getOne (uuid: string): ProjectInterface | undefined;
}
