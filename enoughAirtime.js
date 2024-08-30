export function enoughAirtime(projectedUsage, availableAirtime) {
  var callCost = 1.88;
  var dataCost = 12;
  var smsCost = 0.75;
  var usageList = projectedUsage.split(',');
  var totalCost = 0;

  for (var i = 0; i < usageList.length; i++) {
    if (usageList[i] === 'call') {
      totalCost += callCost;
    } else if (usageList[i] === 'data') {
      totalCost += dataCost;
    } else if (usageList[i] === 'sms') {
      totalCost += smsCost;
    }
  }

  var airtimeLeft = availableAirtime - totalCost;

  if (airtimeLeft < 0) {
    airtimeLeft = 0;
  }

  return 'R' + airtimeLeft.toFixed(2);
}

console.log(enoughAirtime('call,call,call,data,sms,sms,call,data', 50));
console.log(enoughAirtime('data,sms,data,sms', 20));