import { SearchResultInterface } from '~/entities/search-result/search-result.types'
import { Project } from '~/entities/project/project'

export class SearchResult implements SearchResultInterface {
  item: Project
  refIndex: number
  score?: number

  constructor (data: SearchResultInterface) {
    this.item = data.item
    this.refIndex = data.refIndex
    if (data.score) {
      this.score = data.score
    }
  }
}
