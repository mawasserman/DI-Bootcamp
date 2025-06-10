const amount = document.querySelector("#amount");
const fromCurrency = document.querySelector("#fromCurrency");
const toCurrency = document.querySelector("#toCurrency");
const convertButton = document.querySelector("#convert");
const result = document.querySelector("#result");
const switchButton = document.querySelector("#switch");

fetch ("https://v6.exchangerate-api.com/v6/d341eee8b853c68a7c73eedc/codes")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })

    .catch();
   
