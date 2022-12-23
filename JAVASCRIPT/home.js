      let mybutton = document.getElementById("gototop");
      let mybutton2 = document.getElementById("gototop2");

      window.onscroll = function() {
        scrollFunction();
      };

      function scrollFunction() {
        if (document.body.scrollTop > 100 && screen.width > 500) {
          mybutton.style.display = "block";
        } else if(screen.width < 500){
          mybutton2.style.display = "block";
        }
      }

      function topFunction() {
        document.body.scrollTop = 0;
      }

      let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides((slideIndex += n));
      }

      function currentSlide(n) {
        showSlides((slideIndex = n));
      }

      function showSlides(n) {
        let i;

        let slides = document.getElementsByClassName("mySlides");

        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
          slideIndex = 1;
        }

        if (n < 1) {
          slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
          dots[i].classList.remove("active");
        }

        slides[slideIndex - 1].style.display = "block";

        dots[slideIndex - 1].classList.add("active");
      }

      function open() {
        let menulists = document.querySelectorAll(".menulist");

        console.log(menulists);

        menulists.forEach(menulist => menulist.classList.toggle("appear"));
      }

      document.querySelector("#logo2").addEventListener("click", open);

      var myIndex = 0;
      carousel();
      
      function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlidess");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 3000); // Change image every 3 seconds
      }

      var myIndex2 = 0;
      carousels();
      
      function carousels() {
        var i;
        var x = document.getElementsByClassName("mySlidess2");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        myIndex2++;
        if (myIndex2 > x.length) {myIndex2 = 1}    
        x[myIndex2-1].style.display = "block";  
        setTimeout(carousels, 3000); // Change image every 3 seconds
      }

      var myIndex3 = 0;
      carouselss();
      
      function carouselss() {
        var i;
        var x = document.getElementsByClassName("mySlidess3");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        myIndex3++;
        if (myIndex3 > x.length) {myIndex3 = 1}    
        x[myIndex3-1].style.display = "block";  
        setTimeout(carouselss, 3000); // Change image every 3 seconds
      }

      var myIndex4 = 0;
      carouselsss();
      
      function carouselsss() {
        var i;
        var x = document.getElementsByClassName("mySlidess4");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        myIndex4++;
        if (myIndex4 > x.length) {myIndex4 = 1}    
        x[myIndex4-1].style.display = "block";  
        setTimeout(carouselsss, 3000); // Change image every 3 seconds
      }