window.addEventListener("DOMContentLoaded", function() {

  var submit = document.getElementById("submit");

  var name = document.getElementById("name");

  var email = document.getElementById("email");

  var message = document.getElementById("message");

  name.addEventListener("onfocus", function(event) {
    console.log("hi");
  });

  submit.addEventListener("click", function(event) {
    event.preventDefault();
    alert(message.value);

  });

  var mouseover = document.getElementById("mouseover");

  mouseover.addEventListener("mouseover", function(event) {
    mouseover.style.webkitTransform = "rotate(360deg)";
    mouseover.style.transitionDuration = "1s";
    setTimeout(function() { mouseover.style.color = "red";}, 1000);
  });


  var aboutBtn = document.getElementById("about-btn");

  var projectsBtn = document.getElementById("projects-btn");

  var contactBtn = document.getElementById("contact-btn");

  var aboutDiv = document.getElementById("about-div");

  var projectsDiv = document.getElementById("projects-div");

  var contactDiv = document.getElementById("contact-div");

  aboutBtn.addEventListener("click", function(event) {
    if (aboutDiv.style.display = "none") {
      aboutDiv.style.display = "block";
      projectsDiv.style.display = "none";
      contactDiv.style.display = "none";
    } else {
      aboutDiv.style.display = "none";
    };
  });

  projectsBtn.addEventListener("click", function(event) {
    if (projectsDiv.style.display = "none") {
      projectsDiv.style.display = "block";
      aboutDiv.style.display = "none";
      contactDiv.style.display = "none";
    } else {
      projectsDiv.style.display = "none";
    };
  });

  contactBtn.addEventListener("click", function(event) {
    if (contactDiv.style.display = "none") {
      contactDiv.style.display = "block";
      aboutDiv.style.display = "none";
      projectsDiv.style.display = "none";
    } else {
      contactDiv.style.display = "none";
    };
  });

})

