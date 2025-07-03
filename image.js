const gallery = document.getElementById("gallery");
const filters = document.querySelectorAll(".filters button");

// Local images (must be placed in "images/" folder in your project)
const images = [
  // Adventure images
  { url: "images/adventure1.jpg", category: "adventure" },
  { url: "images/adventure2.jpg", category: "adventure" },
  { url: "images/adventure3.jpg", category: "adventure" },
  { url: "images/adventure4.jpg", category: "adventure" },
  { url: "images/adventure5.jpg", category: "adventure" },
  { url: "images/adventure6.jpg", category: "adventure" },
  { url: "images/adventure7.jpg", category: "adventure" },
  { url: "images/adventure8.jpg", category: "adventure" },
  { url: "images/adventure9.jpg", category: "adventure" },
  { url: "images/adventure10.jpg", category: "adventure" },
  { url: "images/adventure11.jpg", category: "adventure" },
  { url: "images/adventure12.jpg", category: "adventure" },
  { url: "images/adventure13.jpg", category: "adventure" },
  { url: "images/adventure14.jpg", category: "adventure" },
  { url: "images/adventure15.jpg", category: "adventure" },
  { url: "images/adventure16.jpg", category: "adventure" },
  { url: "images/adventure17.jpg", category: "adventure" },

  // Gaming images
  { url: "images/gaming1.jpg", category: "gaming" },
  { url: "images/gaming2.jpg", category: "gaming" },
  { url: "images/gaming3.jpg", category: "gaming" },
  { url: "images/gaming4.jpg", category: "gaming" },
  { url: "images/gaming5.jpg", category: "gaming" },
  { url: "images/gaming6.jpg", category: "gaming" },
  { url: "images/gaming7.jpg", category: "gaming" },
  { url: "images/gaming8.jpg", category: "gaming" },
  { url: "images/gaming9.jpg", category: "gaming" },
  { url: "images/gaming10.jpg", category: "gaming" },
  { url: "images/gaming11.jpg", category: "gaming" },
  { url: "images/gaming12.jpg", category: "gaming" },
  { url: "images/gaming13.jpg", category: "gaming" },

  // Nature images
  { url: "images/nature1.jpg", category: "nature" },
  { url: "images/nature2.jpg", category: "nature" },

  // Space images
  { url: "images/space1.jpg", category: "space" },
  { url: "images/space2.jpg", category: "space" },

  // animals images
  { url: "images/animals1.jpg", category: "animals" },
  { url: "images/animals2.jpg", category: "animals" },
  { url: "images/animals3.jpg", category: "animals" },
  { url: "images/animals4.jpg", category: "animals" },
  { url: "images/animals5.jpg", category: "animals" },
  { url: "images/animals6.jpg", category: "animals" },
  { url: "images/animals7.jpg", category: "animals" },
  { url: "images/animals8.jpg", category: "animals" },
  { url: "images/animals9.jpg", category: "animals" },
  { url: "images/animals10.jpg", category: "animals" },
  { url: "images/animals11.jpg", category: "animals" },
  { url: "images/animals12.jpg", category: "animals" },
  { url: "images/animals13.jpg", category: "animals" }


];

// Load images based on selected category
function loadImages(filter) {
  gallery.innerHTML = ""; // Clear existing images

  const filtered = filter === "all"
    ? images
    : images.filter(img => img.category === filter);

  filtered.forEach((img, index) => {
    const card = document.createElement("div");
    card.className = "image-card";
    card.innerHTML = `
      <img src="${img.url}" alt="${img.category} ${index + 1}">
      <a href="${img.url}" download>
        <button>Download</button>
      </a>
    `;
    gallery.appendChild(card);
  });
}

// Initial load (show all)
loadImages("all");

// Handle filter button click
filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    loadImages(btn.getAttribute("data-filter"));
  });
});
