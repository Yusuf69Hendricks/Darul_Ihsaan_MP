function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav" ) {
        x.className += " responsive";
    } else {
        x.className = "nav"
    }

}


// COLOR CHNAGE

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "0";
//     document.getElementById("navbar").style.backgroundColor = "white";
//     document.getElementById("navbar").style.color = "red";
    
//     // document.getElementById("navbar").style.font = "#16325b"
//   } else {
//     document.getElementById("navbar").style.padding = "0";
//     document.getElementById("navbar").style.backgroundColor = "#243b75";
//     document.getElementById("navbar").style.color = "yellow";
//   }
// }

// function BtnFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("readmore");

  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more"; 
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less"; 
//       moreText.style.display = "inline";
//     }
//   }