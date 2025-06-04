// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.

// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
const input = document.getElementById("input");
const button = document.getElementById("button");
const gifContainer = document.getElementById("gifContainer");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const textSearched = input.value.trim().toLowerCase();
  if (textSearched) {
    fetchGif(textSearched);
  } else {
    alert("Please enter a search term");
  }
});

const fetchGif = async (searchRequest) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${searchRequest}&limit=10`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const gifData = await response.json();

    if (gifData.data.length === 0) {
      gifContainer.innerHTML = "<p>No GIF found for this search term.</p>";
    } else {
      gifData.data.forEach((gif) => {
        const gifUrl = gif.images.original.url;

        const gifSingle = document.createElement("div");
        gifSingle.classList.add("gif-single");

        gifSingle.innerHTML = `<img src="${gifUrl}" alt="gif">`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        deleteButton.addEventListener("click", () => {
          gifSingle.remove();
        });

        gifSingle.appendChild(deleteButton);
        gifContainer.appendChild(gifSingle);
      });
    }

    const deleteAllButton = document.createElement("button");
    deleteAllButton.textContent = "DELETE All";
    deleteAllButton.addEventListener("click", () => {
      gifContainer.innerHTML = "";
    });
    gifContainer.appendChild(deleteAllButton);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    gifContainer.innerHTML =
      "<p>Error fetching GIF. Please try again later.</p>";
  }
};

// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.

// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
