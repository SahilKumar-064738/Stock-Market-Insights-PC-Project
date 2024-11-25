document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const responseList = document.querySelector(".response-list");

  // Array of image paths
  const images = [
    "Gender.jpeg",
    "age.jpeg",
    "risk.jpeg",
    "equity.jpeg",
    "5.jpeg",
    "interest.jpeg",
    "invest.jpeg",
    "mf.jpeg",
    "reason.jpeg",
    "sources.jpeg",
    "understand.jpeg",
    "frequency.jpeg",
    // Add all 14 image paths here
  ];

  // Dynamically render image cards
  images.forEach((src, index) => {
    const card = document.createElement("div");
    card.className = "photo-card";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Analysis ${index + 1}`;

    card.appendChild(img);
    gallery.appendChild(card);
  });

  // Mock survey responses (replace with real data later)
  const responses = [
    {
      name: "Azad",
      feedback:
        "The stock market provides great opportunities to grow wealth if studied carefully.",
    },
    {
      name: "Pratham Sharma",
      feedback:
        "I find the stock market intriguing, especially the way trends influence decisions.",
    },
    {
      name: "Gaurav Chahal",
      feedback:
        "The dynamics of stock markets are fascinating and full of learning opportunities.",
    },
    {
      name: "Atul",
      feedback:
        "I believe understanding market fundamentals is the key to successful investing.",
    },
    {
      name: "Manav",
      feedback:
        "The stock market is like a puzzle; solving it can be highly rewarding.",
    },
    {
      name: "Krishdeep",
      feedback:
        "Exploring the stock market is an essential skill for modern finance enthusiasts.",
    },
    {
      name: "Tarun",
      feedback:
        "I am eager to learn more about how market strategies work in real-time.",
    },
    {
      name: "Karan",
      feedback:
        "The insights into the stock market have truly broadened my understanding of finance.",
    },
    {
      name: "Divesh",
      feedback:
        "The way stocks fluctuate based on global events is amazing to observe.",
    },
    {
      name: "Neeraj",
      feedback:
        "A well-researched approach to stock trading can make a huge difference.",
    },
    {
      name: "Shauryavardhan",
      feedback:
        "The stock market holds the potential to shape economic futures.",
    },
    {
      name: "Rahul",
      feedback:
        "Being informed about the stock market is crucial for making sound financial decisions.",
    },
    {
      name: "Tanish Arora",
      feedback:
        "Learning about the stock market has been an eye-opening experience.",
    },
    {
      name: "Namish",
      feedback:
        "The stock market is a reflection of economic conditions and opportunities.",
    },
    {
      name: "Sujal Nagori",
      feedback:
        "Stock market insights have deepened my appreciation for investment strategies.",
    },
    {
      name: "Swastik",
      feedback:
        "Understanding the stock market feels like unlocking a new financial perspective.",
    },
    {
      name: "Rachit",
      feedback:
        "The potential of the stock market to generate wealth is inspiring.",
    },
    {
      name: "Akashdeep",
      feedback: "I enjoy analyzing market trends to predict possible outcomes.",
    },
    {
      name: "Ayushi",
      feedback:
        "Gaining knowledge about the stock market is empowering and exciting.",
    },
    {
      name: "Pranaya",
      feedback:
        "The stock market connects the dots between world economics and personal finance.",
    },
    {
      name: "Saffranpreet Kaur",
      feedback:
        "Every stock market lesson teaches a new dimension of financial literacy.",
    },
    {
      name: "Sahil Kumar",
      feedback:
        "Exploring the stock market has been an engaging and rewarding journey.",
    },
    {
      name: "Nishita Verma",
      feedback:
        "The interplay of market forces makes the stock market a dynamic field to study.",
    },
    {
      name: "Shivam Kumar Paswan",
      feedback:
        "Learning stock market strategies feels like acquiring a lifelong skill.",
    },
    {
      name: "Armaan",
      feedback:
        "The stock market serves as a window into the world of global finance.",
    },
  ];

  // Dynamically render responses
  responses.forEach((response) => {
    const div = document.createElement("div");
    div.className = "response-item";
    div.innerHTML = `<strong>${response.name}:</strong> <p>${response.feedback}</p>`;
    responseList.appendChild(div);
  });
});
