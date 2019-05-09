(function (){
    'use strict'
    window.addEventListener('load', function(){
        function Easy() {

            //gives a name to the image
            picture = document.getElementById('RedBall');
          
            spaceW = screen.height - picture.height;
            spaceH = screen.width - picture.width;
          
            //set the interval to 750ms
            setInterval(MoveIt, 775);
        };
        
        function MoveIt() {

            //random movement for the image
            picture.style.top = Math.round(Math.random() * spaceW) + "px";
            picture.style.left = Math.round(Math.random() * spaceH) + "px";
        };
    })
})