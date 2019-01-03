// Code your solution here:
function driversWithRevenueOver(drivers, income){
  return drivers.filter(function (driver) {
    return driver.revenue > income});
		}
		
	function driverNamesWithRevenueOver (drivers, income) {
  return driversWithRevenueOver(drivers, income)
   drivers.map(function (driver) {
      return driver.name;
    });
}