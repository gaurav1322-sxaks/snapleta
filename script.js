const gallery = document.getElementById("gallery");
const totalImages = 36; // 6x6

for (let i = 1; i <= totalImages; i++) {
  const imageCard = document.createElement("div");
  imageCard.className = "image-card";

  const imgUrl = `https://picsum.photos/400/250?random=${i}`;

  imageCard.innerHTML = `
    <img src="${imgUrl}" alt="Image ${i}">
    <a href="${imgUrl}" download>
      <button>Download</button>
    </a>
  `;

  gallery.appendChild(imageCard);
}
