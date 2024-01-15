const boxContainer = document.getElementById('box-container');


for (let i = 1; i <= 100; i++) {
    // Trova numeri divisibili per 15
    let result = "";
    if (i % 15 == 0) {
        result = "FizzBuzz";

        // Trova numeri divisibili per 5
    } else if (i % 5 == 0) {
        result = "Buzz";

        // Trova numeri divisibili per 3    
    } else if (i % 3 == 0) {
        result = "Fizz";
    }

    else {
        result = i;
    }

    const boxElement = `<div class="box ${result}">${result}</div>`;
    boxContainer.innerHTML += boxElement;
    console.log(result);
};