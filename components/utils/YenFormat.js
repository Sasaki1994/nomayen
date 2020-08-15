export default function (price) {
  let separatedNum = String(price).split('.');
  let numWithComma = String(separatedNum[0]).replace(
    /(\d)(?=(\d\d\d)+(?!\d))/g,
    '$1,'
  );
  let priceWithComma;

  if (separatedNum.length > 1) {
    priceWithComma = numWithComma + '.' + separatedNum[1];
  } else {
    priceWithComma = numWithComma;
  }

  return '¥' + priceWithComma;
}
