// problem 1
function mileToGoj(mile) {
  return 1760 * mile;
}
console.log(mileToGoj(13));
// problem 2
function kwhToKcal(kwh) {
  return kwh * 860;
}
console.log(kwhToKcal(12));
// problem 3
function hourToSecond(hour) {
  const minutes = hour * 60;
  const seconds = minutes * 60;
  return seconds;
}
console.log(hourToSecond(2));
// problem 4
function cmToMeter(cm) {
  return cm / 100;
}
console.log(cmToMeter(500));
// problem 5
function inchToCm(inch) {
  return inch * 2.54;
}
console.log(inchToCm(4.2));
// problem 6
function poundToKG(pound) {
  return pound * 0.453;
}
console.log(poundToKG(2));
// problem 7
function gojToMeter(goj) {
  return goj * 0.91;
}
console.log(gojToMeter(4));
