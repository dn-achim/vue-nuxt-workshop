import { Project } from '~/entities/project/project'

export interface SearchResultInterface {
  item: Project;
  refIndex: number;
  score?: number;
}
