const pagedoll = document.getElementById ("pagedoll1")
const gif = document.getElementById ("gif")
const img = document.getElementById ("normalesbild1")
const normalesbild2 = document.getElementById ("normalesbild2")

pagedoll1.addEventListener("click", function() {

  document.body.style.backgroundColor = "#1C2862";
  pagedoll1.style.display = "none";
  normalesbild1.style.display = "none";

  gif.style.display = "block";
  normalesbild2.style.display = "block";
  
})
