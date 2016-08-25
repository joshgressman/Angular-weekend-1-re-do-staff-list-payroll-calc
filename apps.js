var myApp = angular.module("myApp", []);
//global array to store inputs after push
var employees = [];
var salary = 0;
console.log(employees);
myApp.controller("employeeController", ["$scope", function($scope){
console.log("Controller working");


$scope.add = function () {
var firstname = $scope.firstname;
var lastname = $scope.lastname;
var id = $scope.id;
var jobtitle = $scope.jobtitle;
var annualsalary = $scope.annualsalary;
var count = $scope.annualsalary;
salary += parseFloat(count);
//push vlues to global array
employees.push({firstname: firstname, lastname: lastname, id: id, jobtitle: jobtitle, annualsalary: annualsalary });
//scope array of objects = to global array
$scope.employees = employees;
$scope.salary = parseFloat(salary /12).toFixed(2);
clearInputs();
}
//empties out the form
function clearInputs() {
  $scope.firstname ="";
  $scope.lastname ="";
  $scope.id ="";
  $scope.jobtitle ="";
  $scope.annualsalary ="";
}

}]);
