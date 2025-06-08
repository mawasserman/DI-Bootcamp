// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

const form = document.getElementById("sunriseForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const lat1 = document.getElementById("lat1").value;
    const lng1 = document.getElementById("lng1").value;
    const lat2 = document.getElementById("lat2").value;
    const lng2 = document.getElementById("lng2").value;
    const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}&formatted=0`;
    const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}&formatted=0`;

    Promise.all([
    fetch(url1).then(res => res.json()),
    fetch(url2).then(res => res.json())
    ])
    .then(([data1, data2]) => {
        const p1 = document.createElement("p");
        p1.textContent = "City 1 Sunrise: " + data1.results.sunrise;

        const p2 = document.createElement("p");
        p2.textContent = "City 2 Sunrise: " + data2.results.sunrise;

        // const result = document.getElementById("result");
        // result.appendChild(p1);
        // result.appendChild(p2);
    });
});