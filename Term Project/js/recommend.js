function season_click(){
  document.getElementById("content_season").style.display = "inline-block";
  document.getElementById("content_price").style.display = "none";
  document.getElementById("content_food").style.display = "none";
}

function price_click(){
  document.getElementById("content_season").style.display = "none";
  document.getElementById("content_price").style.display = "inline-block";
  document.getElementById("content_food").style.display = "none";
}

function food_click(){
  document.getElementById("content_season").style.display = "none";
  document.getElementById("content_price").style.display = "none";
  document.getElementById("content_food").style.display = "inline-block";
}
