document.addEventListener("DOMContentLoaded", () => {
  // Challenge 1: Load dog images
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const imageContainer = document.getElementById("dog-image-container");

  fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
      data.message.forEach(imgUrl => {
        const img = document.createElement("img");
        img.src = imgUrl;
        img.style.width = "200px";
        img.style.margin = "10px";
        imageContainer.appendChild(img);
      });
    });

  // Challenge 2: Load dog breeds
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const ul = document.getElementById("dog-breeds");
  const dropdown = document.getElementById("breed-dropdown");
  let allBreeds = [];

  function renderBreeds(breeds) {
    ul.innerHTML = ""; // clear before adding
    breeds.forEach(breed => {
      const li = document.createElement("li");
      li.textContent = breed;
      ul.appendChild(li);

      // Challenge 3: Change color on click
      li.addEventListener("click", () => {
        li.style.color = "blue";
      });
    });
  }

  fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
      allBreeds = Object.keys(data.message);
      renderBreeds(allBreeds);
    });

  // Challenge 4: Filter breeds by dropdown
  dropdown.addEventListener("change", (e) => {
    const selectedLetter = e.target.value;
    const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
    renderBreeds(filteredBreeds);
  });

  console.log('%c HI', 'color: firebrick');
});
