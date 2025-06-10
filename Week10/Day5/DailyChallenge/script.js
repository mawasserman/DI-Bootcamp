const amount = document.querySelector("#amount");
const fromCurrency = document.querySelector("#fromCurrency");
const toCurrency = document.querySelector("#toCurrency");
const convertButton = document.querySelector("#convert");
const result = document.querySelector("#result");
const switchButton = document.querySelector("#switch");
const converterForm = document.querySelector("#converterForm");

fetch ("https://v6.exchangerate-api.com/v6/d341eee8b853c68a7c73eedc/codes")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        const currencies = data.supported_codes;

        currencies.forEach(([code, name]) => {
            const option1 = document.createElement("option");
            option1.value = code;
            option1.textContent = `${code} - ${name}`;
            fromCurrency.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = code;
            option2.textContent = `${code} - ${name}`;
            toCurrency.appendChild(option2);
    })})

  .catch((error) => {
        console.error("Error fetching currencies:", error);
    });

converterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const amountValue = parseFloat(amount.value);
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;

    fetch(`https://v6.exchangerate-api.com/v6/d341eee8b853c68a7c73eedc/pair/${fromCurrencyValue}/${toCurrencyValue}/${amountValue}`)
        .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    result.textContent = `${amountValue} ${fromCurrencyValue} = ${data.conversion_result} ${toCurrencyValue}`;
                })
                .catch((error) => {
                    console.error("Error converting currency:", error);
                });
        });

// switchButton.addEventListener("click", (e) => {
//     e.preventDefault();

//     const temp = fromCurrency.value;
//     fromCurrency.value = toCurrency.value;
//     toCurrency.value = temp;
// });