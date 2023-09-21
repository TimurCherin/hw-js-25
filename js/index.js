// ex 1

const categories = document.querySelector("ul#categories");

const categoriesChildren = categories.children;
const categoriesTitle = [...categoriesChildren].map((el) => {
  const categoryEl = el.firstElementChild;
  const categoryName = categoryEl.textContent;
  const element = categoryEl.nextElementSibling;
  const elementCount = element.children.length;
  console.log(
    `Категорія: ${categoryName}, Кількість елементів: ${elementCount}`
  );
});

// ex 2

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("ul#ingredients");

const ingredientsEl = ingredients.map((el) => {
  const element = document.createElement("li");
  element.textContent = el;
  return element;
});

ingredientsList.append(...ingredientsEl);

// ex 3

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesList = document.querySelector("ul#gallery");

const markup = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
  .join("");

imagesList.innerHTML = markup;

// ex 4

const value = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
