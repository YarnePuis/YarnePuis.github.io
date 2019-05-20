;;
(function () {
    'use strict';

    window.addEventListener('load', function () {

        RandomGenerator();
        
        // //gives a name to the image
        let photo = document.getElementById('PauloCallebaut');

        let spaceW = screen.height - photo.height;
        let spaceH = screen.width - photo.width;

        function RandomGenerator () {
            document.getElementById('PressStart').addEventListener('click', function () {
                document.getElementById('Start').classList.add('Start--Hide');
    
                if (window.location.href == 'http://127.0.0.1:5500/Eindwerk/Clvl1.html')
                {
                    //The interval will set to 1.5s
                    setInterval(MoveIt, 1500);
                }
                else if (window.location.href == 'http://127.0.0.1:5500/Eindwerk/Clvl2.html')
                {
                    //The interval will set to 900ms
                    setInterval(MoveIt, 900);
                }
                else 
                {
                    //The interval will set tot 500ms
                    setInterval(MoveIt, 500);
                }
            });
        };
        
        function MoveIt() {

            //random movement for the image
            photo.style.top = Math.round(Math.random() * spaceW) + "px";
            photo.style.left = Math.round(Math.random() * spaceH) + "px";
        };

        let teller = 0;
        document.getElementById('PauloCallebaut').addEventListener('click', function () {

            if (teller == 4) { //When Teller is 5, You can go to the next level.
                document.getElementById('LevelCom').classList.remove('LevelCom--Hide');
                teller++;
                document.getElementById('Teller').innerHTML = teller;
            } else {
                teller++;
                console.log(teller);
                document.getElementById('Teller').innerHTML = teller;
            }
        });
    })
})();