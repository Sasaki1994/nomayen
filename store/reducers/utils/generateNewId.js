export default function generateNewId(entity) {
  if (entity.allIds.length === 0) {
        return 1
      } else {
        return Math.max(...entity.allIds) + 1;
      }
}