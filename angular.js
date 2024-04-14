var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.annualIncome = ''; // Initialize annual income
  $scope.errorMessage1 = ''; // Initialize error message for annual income
  $scope.showTooltip1 = false; // Initialize tooltip visibility flag for annual income

  $scope.extraIncome = ''; // Initialize extra income
  $scope.errorMessage2 = ''; // Initialize error message for extra income
  $scope.showTooltip2 = false; // Initialize tooltip visibility flag for extra income

  $scope.deduction = ''; // Initialize deduction
  $scope.errorMessage3 = ''; // Initialize error message for deduction
  $scope.showTooltip3 = false; // Initialize tooltip visibility flag for deduction
  $scope.age = '0';
  
  $scope.verifyAnnualIncome = function() {
    var inputValue = $scope.annualIncome;
    var invalidCharacters = '';

    if (inputValue) {
        for (var i = 0; i < inputValue.length; i++) {
            if (isNaN(inputValue[i])) {
                invalidCharacters += inputValue[i];
            }
        }
    }

    if (invalidCharacters) {
        $scope.errorMessage1 = '\'' + invalidCharacters + '\' not allowed. Enter a valid number';
        $scope.showTooltip1 = true;
    } else {
        $scope.errorMessage1 = '';
        $scope.showTooltip1 = false;
    }
  };

  $scope.verifyExtraIncome = function() {
    var inputValue = $scope.extraIncome;
    var invalidCharacters = '';

    if (inputValue) {
        for (var i = 0; i < inputValue.length; i++) {
            if (isNaN(inputValue[i])) {
                invalidCharacters += inputValue[i];
            }
        }
    }

    if (invalidCharacters) {
        $scope.errorMessage2 = '\'' + invalidCharacters + '\' not allowed. Enter a valid number';
        $scope.showTooltip2 = true;
    } else {
        $scope.errorMessage2 = '';
        $scope.showTooltip2 = false;
    }
  };

  $scope.verifyDeduction = function() {
    var inputValue = $scope.deduction;
    var invalidCharacters = '';

    if (inputValue) {
        for (var i = 0; i < inputValue.length; i++) {
            if (isNaN(inputValue[i])) {
                invalidCharacters += inputValue[i];
            }
        }
    }

    if (invalidCharacters) {
        $scope.errorMessage3 = '\'' + invalidCharacters + '\' not allowed. Enter a valid number';
        $scope.showTooltip3 = true;
    } else {
        $scope.errorMessage3 = '';
        $scope.showTooltip3 = false;
    }
  };
});
