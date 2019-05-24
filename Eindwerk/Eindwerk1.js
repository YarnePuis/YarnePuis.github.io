;;
(function () {
    'use strict';

    //score for scoreboard
    let score = 500;

    //A teller to count
    let teller = 0;

    //gives a name to the image
    let photo = document.getElementById('PauloCallebaut');

    let auwtch = new Audio('../Eindwerk/audio/PauloAuwtch1.mp4');
    auwtch.volume = 1.0;

    let boom = new Audio('../Eindwerk/audio/Boom.mp3');
    boom.volume = 1.0;

    let level = 1;

    function RandomGenerator() {
        

        if (level === 1) {


            //The interval will set to 1.5s & the random image changer to 20% 
            setInterval(function () {
                MoveIt(0.5)
            }, 13000);
            level+=1;
            document.getElementById('Start').classList.add('Start--Hide');
            console.log(level);
            lvl2();
            
        } else if (level === 2) {
                
            document.getElementById('Start').classList.remove('Start--Hide');
            //The interval will set to 900ms & the random image changer to 35%
            setInterval(function () {
                MoveIt(0.35)
            }, 9000);
            level+=1;
        } else {
            //The interval will set tot 500ms & the random image changer to 50%
            setInterval(function () {
                MoveIt(0.5)
            }, 650);
        }
    };

    let background = document.getElementById('Prelvl1');

    function lvl2() {

        document.getElementById('NextLvl').addEventListener('click', function () {

        document.body.style.backgroundImage = "Url('fotos/BackgroundLvl2.jpg')";
        document.getElementById('LevelCom').classList.add('hidden');
        RandomGenerator();
        console.log('background 2');

    })
        
    }

    function MoveIt(chance) {

        let spaceW = screen.height - photo.height;
        let spaceH = screen.width - photo.width;

        //random movement for the image
        photo.style.top = Math.round(Math.random() * spaceW) + "px";
        photo.style.left = Math.round(Math.random() * spaceH) + "px";

        if (Math.random() <= chance) {

            photo.src = '../Eindwerk/fotos/Bom.png';
        } else {
            photo.src = "../Eindwerk/fotos/PauloCallebaut.jpeg";
        }
    };

    function ScoreSec() {

        score--;
        document.getElementById('ScoreBoard').innerHTML = score;
        
    }

    window.addEventListener('load', function () {

        document.getElementById('PressStart').addEventListener('click', function () {

            photo.classList.remove('hidden');
            RandomGenerator();
            

            setInterval(ScoreSec, 1000);

            console.log(score);
        });

        document.getElementById('PauloCallebaut').addEventListener('click', function () {

            if (teller === 4) { //When Teller is 5, You can go to the next level.

                auwtch.play();

                document.getElementById('LevelCom').classList.remove('LevelCom--Hide');
                teller++;
                document.getElementById('Teller').innerHTML = teller;
            } else if (photo.getAttribute('src') === '../Eindwerk/fotos/Bom.png') { // when te source of the image is a bomb, your score will decrease by 100

                //Play the boom sound
                boom.play();

                score -= 100;
                document.getElementById('ScoreBoard').innerHTML = score;
            } else {

                score += 20;
                document.getElementById('ScoreBoard').innerHTML = score;

                //When pressed on the picture, a sound will appear.
                auwtch.play();

                teller++;
                document.getElementById('Teller').innerHTML = teller;
            }
        });
    });
})();