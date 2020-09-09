
export const entityToList = (entity) => {
  return entity.allIds.map(id => entity.byId[id])
}
