;;
(function () {
    'use strict';

    //score for scoreboard
    let score = 500;

    //A teller to count
    let teller = 0;

    //gives a name to the image
    let photo = document.getElementById('PauloCallebaut');



    function RandomGenerator() {
        document.getElementById('Start').classList.add('Start--Hide');

        if (window.location.href == 'http://127.0.0.1:5500/Eindwerk/Clvl1.html') {
            //The interval will set to 1.5s & the random image changer to 20% 
            setInterval(function () {
                MoveIt(0.2)
            }, 1300);
        } else if (window.location.href == 'http://127.0.0.1:5500/Eindwerk/Clvl2.html') {
            //The interval will set to 900ms & the random image changer to 35%
            setInterval(function () {
                MoveIt(0.35)
            }, 9000);
        } else {
            //The interval will set tot 500ms & the random image changer to 50%
            setInterval(function () {
                MoveIt(0.5)
            }, 650);
        }
    };

    function MoveIt(chance) {

        let spaceW = screen.height - photo.height;
        let spaceH = screen.width - photo.width;

        //random movement for the image
        photo.style.top = Math.round(Math.random() * spaceW) + "px";
        photo.style.left = Math.round(Math.random() * spaceH) + "px";

        if (Math.random() <= chance) {

            photo.src = '/Eindwerk/fotos/Bom.png';
        } else {
            photo.src = "/Eindwerk/fotos/PauloCallebaut.jpeg";
        }
    };

    function TellerDown() {

        //When press on the Bomb picture, your score will decrease by 100
        document.getElementById('PauloCallebaut').addEventListener('click', function () {


        });
    }

    window.addEventListener('load', function () {

        document.getElementById('PressStart').addEventListener('click', function () {

            photo.classList.remove('hidden');
            RandomGenerator();

            //Background Music
            let backgroundMusic = new Audio('../Eindwerk/audio/BackgroundMusic.mp3');
            backgroundMusic.play();

            console.log(score);
        });

        document.getElementById('PauloCallebaut').addEventListener('click', function () {

            if (teller === 4) { //When Teller is 5, You can go to the next level.
                document.getElementById('LevelCom').classList.remove('LevelCom--Hide');
                teller++;
                document.getElementById('Teller').innerHTML = teller;
            } else if (photo.getAttribute('src') === '../fotos/Bom.png') { // when te source of the image is a bomb, your score will decrease by 100
                
                score -= 100;
                console.log(score);
            } else {
                //When pressed on the picture, a sound will appear.
                let auwtch = new Audio('./Eindwerk/audio/Auwtch.mp3');
                auwtch.play();

                teller++;
                document.getElementById('Teller').innerHTML = teller;
            }
        });


        
    });
})();