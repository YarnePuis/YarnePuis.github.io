;;
(function () {
    'use strict';

    window.addEventListener('load', function () {


        // //gives a name to the image
        let photo = document.getElementById('PauloCallebaut');

        let spaceW = screen.height - photo.height;
        let spaceH = screen.width - photo.width;

        document.getElementById('PressStart').addEventListener('click', function () {
            document.getElementById('Start').classList.add('Start--Hide');
            Easy();
        });

        function Easy() {
            // //set the interval to 750ms
            setInterval(MoveIt, 750);
        };

        function MoveIt() {

            //random movement for the image
            photo.style.top = Math.round(Math.random() * spaceW) + "px";
            photo.style.left = Math.round(Math.random() * spaceH) + "px";
        };

        let teller = 0;
        document.getElementById('PauloCallebaut').addEventListener('click', function () {

            if (teller == 4) {
                document.getElementById('LevelCom').classList.remove('LevelCom--Hide');
            } else {
                teller++;
                console.log(teller);
                document.getElementById('Teller').innerHTML = teller;
            }
        });
    })
})();