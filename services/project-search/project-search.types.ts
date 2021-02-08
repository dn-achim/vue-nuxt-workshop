import { SearchResultInterface } from '~/entities/search-result/search-result.types'

export interface ProjectSearchInterface {
  findOne (uuid: string): SearchResultInterface | undefined;

  filter (phrase: string): SearchResultInterface[];

  search (phrase: string): SearchResultInterface[];
}
