export function totalPhoneBill(data) {
  var call = 0;
  var sms = 0;

  var items = data.split(', ');

  for (var i = 0; i < items.length; i++) {
    if (items[i] === 'call') {
      call++;
    } else if (items[i] === 'sms') {
      sms++;
    }
  }

  var total = (call * 2.75) + (sms * 0.65);
  return 'R' + total.toFixed(2);
}
// console.log(totalPhoneBill('call, sms, call, sms, sms'));