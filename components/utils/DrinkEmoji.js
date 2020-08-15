export default function (drink_type) {
  switch (drink_type) {
    case 'Hard':
      return '🍺';
    case 'Soft':
      return '🍵';
    default:
      return '';
  }
}

export const drinkTypeList = ['Hard', 'Soft'];
