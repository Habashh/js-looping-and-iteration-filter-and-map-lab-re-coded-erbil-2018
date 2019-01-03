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
function exactMatch(drivers, match) {
  return drivers.filter(function (driver) {
    let matches = false;
    for (const val in match) {
      matches = driver[val] === matcher[val];
    }    return matches;  });
			}