function setModalVisible() {
    var state = document.querySelector('.modal-container');
    state.style.visibility = "visible";
}

function setModalHidden() {
    var state = document.querySelector('.modal-container');
    state.style.visibility = "hidden";
}

function setFormHidden() {
    var state = document.querySelector('form');
    state.style.visibility = "hidden";
    var state_div = document.querySelector('.form-content');
    state_div.style.visibility = "hidden"
}

function setFormVisible() {
    var state = document.querySelector('form');
    state.style.visibility = "visible";
    var state_div = document.querySelector('.form-content');
    state_div.style.visibility = "visible"
}

function calculation() {
    var form = document.querySelector('form');
    var annual_income = Number(form.annual_income.value);
    var extra_income = Number(form.extra_income.value);
    var age = Number(form.age.value);
    var deduction = Number(form.deduction.value);

    var net_income = annual_income + extra_income - deduction;

    // Check if net income is over 8 Lakhs
    if (net_income > 800000) {
        // Calculate tax based on age
        if (age === 1) {
            net_income = 0.3 * (net_income - 800000);
        } else if (age === 2) {
            net_income = 0.4 * (net_income - 800000);
        } else if (age === 3) {
            net_income = 0.1 * (net_income - 800000);
        }
    }
    setFormHidden();
    setModalVisible();
    var finalAmountSpan = document.getElementById('finalAmountSpan');
    finalAmountSpan.innerHTML = net_income;
}

function validateInputs() {
    // Get all input elements
    var inputs = document.querySelectorAll('input[type="text"]');
    
    // Regular expression to match only numbers
    var numbersRegex = /^\d+$/;

    var isValid = true;

    // Loop through each input element
    inputs.forEach(function(input) {
        // Get the value of the input element
        var value = input.value;

        // Check if the value contains anything other than numbers
        if (!numbersRegex.test(value)) {
            isValid = false;
            return;
        }
    });

    // Validate deductions input
    var deductionInput = document.querySelector('input[name="deduction"]');
    var deductionValue = deductionInput.value;
    if (!numbersRegex.test(deductionValue)) {
        isValid = false;
    }

    // Check if the selection value is 0
    isValid = selectionChecker(isValid);

    // If all inputs are valid (contain only numbers), selection value is not 0, and deductions input is valid, call calculation
    if (isValid) {
        calculation();
    }

    return isValid;
}

function selectionChecker(isValid) {
    var select = document.getElementById('age');
    if (select.value === '0') {
        var state = document.querySelector('.error-tooltip-new');
        state.style.visibility = "visible";
        isValid = false;
    } else {
        var state = document.querySelector('.error-tooltip-new');
        state.style.visibility = "hidden";
    }
    return isValid;
}
