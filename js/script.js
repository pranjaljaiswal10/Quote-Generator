const quotes = [
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "-Mother Taresa",
    color: "#fed766",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    author: "-Franklin D. Roosevelt",
    color: "#63ace5",
  },
  {
    quote:
      "Always remember that you are absolutely unique. Just like everyone else",
    author: "-Margaret Mead",
    color: "#fe8a71",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams",
    author: "-Eleanor Roosevelt",
    color: "#4b86b4",
  },
  {
    quote: "Whoever is happy will make others happy to",
    author: "Anne Frank",
    color: "#fe9c8f",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "-Ralph Waldo Emerson",
    color: "#eb5406",
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "-Anne Fran",
    color: "#3cb371",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    color: "#00bfff",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game",
    author: "-Babe Ruth",
    color: "#3a3b3c",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years",
    author: "-Abraham Lincoln",
    color: "#3385c6",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up",
    author: "-Thomas A. Edison",
    color: "#3b5998",
  },
  {
    quote:
      "If you really look closely, most overnight successes took a long time",
    author: "Steve Jobs",
    color: "#854442",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "-Thomas Jefferson",
    color: "#4d648d",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney",
    color: "#7bc043",
  },
  {
    quote: "Nothing is impossible, the word itself says, ‘I'm possible!'",
    author: "-Audrey Hepburn",
    color: "#35a79c",
  },
];

const p = document.querySelector("p");
const small = document.querySelector("small");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author, color } = quotes[randomIndex];
  p.textContent = quote;
  small.textContent = author;
  document.body.style.background = color;
});
