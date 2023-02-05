document.getElementById("btn").addEventListener("click", function () {
  let rating = document.querySelector('input[name="rating"]:checked');
  if (rating) {
    document.getElementById("selected-value").innerHTML =
      `You selected ${rating.value} out of 5`;
    document.getElementById("rating-section").style.display = "none";
    document.getElementById("thank-you-section").style.display = "block";
  }
});
