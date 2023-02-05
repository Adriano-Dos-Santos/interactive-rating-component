document.getElementById("btn").addEventListener("click", function () {
  let score = document.querySelector('input[name="score"]:checked');
  if (score) {
    document.getElementById("selected-value").innerHTML =
      "You selected " + score.value + " out of 5";
    document.getElementById("rating").style.display = "none";
    document.getElementById("thanks").style.display = "block";
  }
});
