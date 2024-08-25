const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "ux designer",
    img: "https://randomuser.me/api/portraits/women/20.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://randomuser.me/api/portraits/men/24.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://randomuser.me/api/portraits/men/26.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const prev = document.querySelector(".prev-button");
const next = document.querySelector(".next-button");

let currentReviewIndex = 0;
function displayReview() {
  if (currentReviewIndex >= reviews.length) {
    currentReviewIndex = 0;
  } else if (currentReviewIndex < 0) {
    currentReviewIndex = reviews.length - 1;
  }
  document.getElementById("person-img").src = reviews[currentReviewIndex].img;
  document.getElementById("author").textContent =
    reviews[currentReviewIndex].name;
  document.getElementById("id").textContent = reviews[currentReviewIndex].job;
  document.getElementById("info").textContent =
    reviews[currentReviewIndex].text;
}

prev.addEventListener("click", () => {
  currentReviewIndex--;
  displayReview();
});
next.addEventListener("click", () => {
  currentReviewIndex++;
  displayReview();
});

const randomBtn = document.querySelector(".random-btn");

randomBtn.addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * reviews.length);
  currentReviewIndex = randomId;
  console.log(currentReviewIndex);
  displayReview();
});
