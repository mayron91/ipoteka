document.getElementById('service1').addEventListener('click', function() {
    var elementOne = document.getElementById('popup_service1');
    var elementTwo = document.getElementById('header');
    
    if (elementOne.classList.contains("hidden")) {
      elementOne.classList.remove("hidden");
      elementTwo.classList.add("hidden");
    } else {
      elementOne.classList.add("show");
      elementTwo.classList.remove("sticky");
    }
  })