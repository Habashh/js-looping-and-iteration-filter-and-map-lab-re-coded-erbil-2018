// Code your solution here:
function driversWithRevenueOver(drivers, income){
  return drivers.filter(function (driver) {
    return driver.revenue > income});
		}
		
	function driverNamesWithRevenueOver (drivers, income) {
  return driversWithRevenueOver(drivers, income)
   .map(function (driver) {
      return driver.name;
    });
}
function exactMatch(Driver, match) {
  return Driver.filter(function (driver) {
    var matches = false;
    for (var val in match) {
      matches = driver.val === matcher.val;
    }    return matches;  });
			}