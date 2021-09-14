import { dragGroups } from '../data'

export const getDragGroupByColumn = (key) => {
  for(let group of dragGroups) {
    if(group.columns.hasOwnProperty(key)) return group
  }
}