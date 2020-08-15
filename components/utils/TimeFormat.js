export default function (date) {
  let hours = String(date.getHours());
  let minutes = ('00' + String(date.getMinutes())).slice(-2);
  let time = hours + ':' + minutes;
  return time;
}
