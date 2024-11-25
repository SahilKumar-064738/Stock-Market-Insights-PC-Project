// Display Current Date
document.getElementById(
  "current-date"
).textContent = `Today’s Date: ${new Date().toDateString()}`;

// Search Blog Functionality
function searchBlog() {
  const query = document.getElementById("search-box").value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
  } else {
    alert("Please enter a search query.");
  }
}
