var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

function compensationCalculator(employee) {

    //create object

    var employeeCompensation = {};

    // add employeeCompensation.name

    employeeCompensation.name = employee.name

    // add employeeCompensation.bonusPercentage
    
    function bonusCalculation(employee) {

    if (employee.reviewRating <= 2) {
        employeeCompensation.bonusPercentage = 0
    } else if (employee.reviewRating == 3) {
        employeeCompensation.bonusPercentage = 0.04
    } else if (employee.reviewRating == 4) {
        employeeCompensation.bonusPercentage = 0.06
    } else if (employee.reviewRating == 5) {
        employeeCompensation.bonusPercentage = 0.1
    }

    if (employee.employeeNumber.length == 4) {
        employeeCompensation.bonusPercentage += 0.05
    }

    if (employee.bonusPercentage <= 0) {
        employee.bonusPercentage = 0
    } else if (employee.bonusPercentage >= 0.13) {
        employee.bonusPercentage = 0.13
    }

    


    };

    // add employeeCompensation.totalCompensation

    // add employeeCompensation.totalBonus


};