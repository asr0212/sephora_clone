let span = document.getElementsByTagName("span");
let div = document.querySelectorAll(".slide_div");

let s = 0;

let right = () => {
  console.log("I'm right Span");
  for (let i of div) {
    if (s == 0) {
      i.style.left = "0px";
    }
    if (s == 1) {
      i.style.left = "-300px";
    }
    if (s == 2) {
      i.style.left = "-600px";
    }
    if (s == 3) {
      i.style.left = "-900px";
    }
    if (s == 4) {
      i.style.left = "-1200px";
    }
    if (s > 4) {
      s = 4;
    }
  }
  s++;
};
let left = () => {
  console.log("I'm left Span");
  for (let i of div) {
    if (s == 0) {
      i.style.left = "1px";
    }
    if (s == 1) {
      i.style.left = "-300px";
    }
    if (s == 1) {
      i.style.left = "-600px";
    }
    if (s == 1) {
      i.style.left = "-900px";
    }
    if (s < 0) {
      s = 0;
    }
  }
  s--;
};

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
function ShowAndHide() {
  var x = document.getElementById("SectionName");
  if (x.style.display == "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
}
function ShowAndHide2() {
  var x = document.getElementById("SectionName2");
  if (x.style.display == "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}
function ShowAndHide3() {
  var x = document.getElementById("SectionName3");
  if (x.style.display == "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}
function ShowAndHide4() {
  var x = document.getElementById("SectionName4");
  if (x.style.display == "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}
function ShowAndHide5() {
  var x = document.getElementById("SectionName5");
  if (x.style.display == "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}
function ShowAndHide6() {
  var x = document.getElementById("SectionName6");
  if (x.style.display == "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}
function ShowAndHide7() {
  var x = document.getElementById("SectionName7");
  if (x.style.display == "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
  document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
}



