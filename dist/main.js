if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registeration => {
   // console.log("SW Registered!");
    console.log(registeration);
  }).catch(error => {
   // console.log("SW Registered filed");
    console.log(error);
  });
}
$(document).ready(function() {
  //items
  var item = document.querySelectorAll(".item");
  function activeItem() {
    item.forEach((item)=>
      item.classList.remove('active'));
    this.classList.add('active');
    //navigator.vibrate(30);
  }
  item.forEach((item)=>
    item.addEventListener('click', activeItem));

  $("#about").click(()=> {
    $(".about-page").addClass("act");
    $(".contact-page,.skills-page").removeClass("act");
  })
  $("#contact").click(()=> {
    $(".contact-page").addClass("act");
    $(".about-page,.skills-page").removeClass("act");
  })
  $("#skills").click(()=> {
    $(".skills-page").addClass("act");
    $(".about-page,.contact-page").removeClass("act");
  });
  $("#home").click(()=> {
    $(".about-page,.contact-page,.skills-page").removeClass("act");
  });
});