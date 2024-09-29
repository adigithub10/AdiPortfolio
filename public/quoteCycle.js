const quotes =[  " The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.-Eric Schmidt ",
    "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human. — Alan Turing",
    "Your computer is only as smart as the person using it. — Mark Cuban",
    "Code is like humor. When you have to explain it, it’s bad. — Cory House",
    "Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest.- Eleanor Roosevelt",
    "Computers are useless. They can only give you answers. — Pablo Picasso",
    "Computers themselves, and software yet to be developed, will revolutionize the way we learn. — Steve Jobs",
    ];
  
  function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  // Run the function when the page loads
  window.onload = displayQuote;
  
  