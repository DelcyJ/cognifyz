const button = document.getElementById('buttonid');

button.addEventListener('click', function() {
  button.classList.toggle('clicked');
});
function Greeting() {
    let now = new Date();
    let hour = now.getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "Good morning!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    alert(greeting);
}

function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    let expression = document.getElementById('result').value;
    let result;
    try {
        result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        alert('Invalid expression');
    }
}
