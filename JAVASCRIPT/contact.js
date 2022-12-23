
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

      function open() {
        let menulists = document.querySelectorAll(".menulist");

        console.log(menulists);

        menulists.forEach(menulist => menulist.classList.toggle("appear"));
      }

      document.querySelector("#logo2").addEventListener("click", open);

      $(document).ready(function (){
        $('#btn').click(function (){
            
            let name = $('#names1').val()
            
            let email = $('#names2').val()
            
            let message = $('#names3').val()
        })
    })
