document.addEventListener('DOMContentLoaded', function() {
    let container=document.getElementById('calculator-container');

    document.getElementById('btn-calculate').addEventListener('click', function(){
        let input1=document.getElementById('firstNumber');
        const number1=parseFloat(input1.value);
        let input2=document.getElementById('secondNumber');
        const number2=parseFloat(input2.value);
        input1.value='';
        input2.value='';
        const operator=document.getElementById('selectOperator');
        const selectOperator=operator.value;
        
        if (isNaN(number1) || isNaN(number2)) {
            displayError("Please enter valid numeric values for both numbers.");
            return;
        }

        if (selectOperator === "") {
            displayError("Please select an operation.");
            return;
        }

        let resultDiv=document.createElement('div');
        resultDiv.classList.add('result');
        resultDiv.innerHTML=`
            <h5>Your input : First Number ${number1}, Second Number ${number2} and Operation (${selectOperator}) </h5>
        `;

        if(selectOperator=='+'){
           const sum= number1 + number2;
           resultDiv.innerHTML+=`<h4> Result : ${sum}</h4>`;
        }else if(selectOperator=='-'){
          const sub= number1 - number2;
          resultDiv.innerHTML+=`<h4> Result : ${sub}</h4>`;
        }else if(selectOperator=='*'){
            const mul= number1 * number2;
            resultDiv.innerHTML+=`<h4> Result : ${mul}</h4>`;
        }else if(selectOperator=='/'){
            const div= number1 / number2;
            resultDiv.innerHTML+=`<h4> Result : ${div}</h4>`;
        }

        if (document.querySelector('.result')) {
            container.removeChild(document.querySelector('.result'));
        }
        clearError();
        container.appendChild(resultDiv);
        operator.value='';
    });
    
});

function displayError(message) {
    let errorDiv = document.getElementById('error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'error-message';
        errorDiv.classList.add('error');
        document.getElementById('calculator-container').appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}

function clearError() {
    let errorDiv = document.getElementById('error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
}

