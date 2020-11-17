const questions = [
  {
    question:
      "In Shakespeare's play Julius Caesar, Caesar's last words were...",
    answers: [
      { text: "Iacta alea est!", correct: false },
      { text: "Vidi, vini, vici", correct: false },
      { text: "Et tu, Brute?", correct: true },
      { text: "Aegri somnia vana", correct: false },
    ],
  },
  {
    question: "A group of tigers are referred to as:",
    answers: [
      { text: "Chowder", correct: false },
      { text: "Pride", correct: false },
      { text: "Ambush", correct: true },
      { text: "Destruction", correct: false },
    ],
  },
  {
    question: "What is the top speed an average cat can travel?",
    answers: [
      { text: "31 mph", correct: true },
      { text: "42 mph", correct: false },
      { text: "13 mph", correct: false },
      { text: "9 mph", correct: false },
    ],
  },
  {
    question: "A cat can jump to _____ times its own height:",
    answers: [
      { text: "3", correct: false },
      { text: "9", correct: false },
      { text: "7", correct: false },
      { text: "5", correct: true },
    ],
  },
  {
    question: "What is the only letter that doesn't appear in a US state name?",
    answers: [
      { text: "M", correct: false },
      { text: "Z", correct: false },
      { text: "Q", correct: true },
      { text: "X", correct: false },
    ],
  },
  {
    question: "What is the name for a cow-bison hybrid?",
    answers: [
      { text: "Cowson", correct: false },
      { text: "Beefalo", correct: true },
      { text: "Bicow", correct: false },
      { text: "Mooson", correct: false },
    ],
  },
  {
    question: "What is the largest freshwater lake in the world?",
    answers: [
      { text: "Lake Baikal", correct: false },
      { text: "Lake Michigan", correct: false },
      { text: "Lake Victoria", correct: false },
      { text: "Lake Superior", correct: true },
    ],
  },

  {
    question: "In a website address bar, what does WWW stand for?",
    answers: [
      { text: "World Wide Web", correct: true },
      { text: "Wild Wild West", correct: false },
      { text: "War World Web", correct: false },
      { text: "World Win Wide", correct: false },
    ],
  },
  {
    question:
      "In a game of bingo, what number is represented by the name two little ducks?",
    answers: [
      { text: "20", correct: false },
      { text: "55", correct: false },
      { text: "22", correct: true },
      { text: "77", correct: false },
    ],
  },
  {
    question: "According to Greek mythology, who was the first woman on Earth?",
    answers: [
      { text: "Pandora", correct: true },
      { text: "Lilith", correct: false },
      { text: "Eve", correct: false },
      { text: "Hera", correct: false },
    ],
  },
  {
    question: "In which European city would you find Orly airport?",
    answers: [
      { text: "London", correct: false },
      { text: "Belgium", correct: false },
      { text: "Munich", correct: false },
      { text: "Paris", correct: true },
    ],
  },
  {
    question: "Where would you find the Sea of Tranquility?",
    answers: [
      { text: "California", correct: false },
      { text: "The Moon", correct: true },
      { text: "Siberia", correct: false },
      { text: "China", correct: false },
    ],
  },
  {
    question: "Which artist painted 'Girl with a Pearl Earrin'?",
    answers: [
      { text: "Van Gogh", correct: false },
      { text: "Vermeer", correct: true },
      { text: "Picasso", correct: false },
      { text: "Da Vinci", correct: false },
    ],
  },
  {
    question: "What is the official name for the 'hashtag' symbol?",
    answers: [
      { text: "Number sign", correct: false },
      { text: "Hash Sign", correct: false },
      { text: "Octothorpe", correct: true },
      { text: "Pound", correct: false },
    ],
  },
  {
    question: "Not American at all, where is apple pie from?",
    answers: [
      { text: "England", correct: true },
      { text: "Japan", correct: false },
      { text: "Ethiopia", correct: false },
      { text: "Canada", correct: false },
    ],
  },
  {
    question: "What is the national animal of Scotland?",
    answers: [
      { text: "Bear", correct: false },
      { text: "Rabbit", correct: false },
      { text: "Seal", correct: false },
      { text: "Unicorn", correct: true },
    ],
  },
  {
    question:
      "Where in the world is the only place where Canada is *due south*",
    answers: [
      { text: "Alaska", correct: false },
      { text: "Detroit", correct: true },
      { text: "Russia", correct: false },
      { text: "Washington", correct: false },
    ],
  },
  {
    question: "Approximately how many grapes go into a bottle of wine?",
    answers: [
      { text: "500", correct: false },
      { text: "200", correct: false },
      { text: "700", correct: true },
      { text: "1000", correct: false },
    ],
  },
  {
    question: "How much does a US One Dollar Bill cost to make?",
    answers: [
      { text: "$0.25", correct: false },
      { text: "$1", correct: false },
      { text: "$5", correct: false },
      { text: "$0.05", correct: true },
    ],
  },
  {
    question:
      "The Vatican bank has the only ATM in the world that allows users to do what?",
    answers: [
      { text: "Perform transactions in Latin", correct: true },
      { text: "Receive withdrawls in rosary beads", correct: false },
      { text: "Vote for the Pope", correct: false },
      { text: "Purchase indulgences", correct: false },
    ],
  },
];

export default questions;
