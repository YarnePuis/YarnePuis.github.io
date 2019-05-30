;;
(function () {
    'use strict';

    /*The global score */
    let score = 50;

    //A teller to count
    let teller = 0;

    //gives a name to the image
    let photo = document.getElementById('PauloCallebaut');

    let auwtch = new Audio('../Eindwerk1/audio/PauloAuwtch1.mp4');
    auwtch.volume = 1.0;

    let boom = new Audio('../Eindwerk1/audio/Boom.mp3');
    boom.volume = 1.0;

    let level = 0;

    let enabled = true;

    //Here are the codes for the different levels
    function Level2() {
        document.body.style.backgroundImage = "Url('../Eindwerk1/fotos/BackgroundLvl2.jpg')";
        document.getElementById('NextLevels').innerHTML = 'Level 2';


    }

    function Level3() {
        document.body.style.backgroundImage = "Url('../Eindwerk1/fotos/BackgroundLvl3.jpg')";
        document.getElementById('NextLevels').innerHTML = 'Level 3';
    }

    //this is the code for the last level
    function EndlessLevel() {


        document.body.style.backgroundImage = "Url('../Eindwerk1/fotos/BackgroundEndless.jpg')";
        document.getElementById('NextLevels').innerHTML = 'Endless Level';
        document.getElementById('ScoreBoard').style.color = 'white';
        document.getElementById('PauloCallebaut').classList.add('hiddem');
        document.getElementById('LevelBoard').classList.add('hidden');
        document.getElementById('EndlessBoard').classList.remove('hidden');

        document.getElementById('EndlessLvl').addEventListener('click', function () {
            document.getElementById('EndlessBoard').classList.add('hidden');
            document.getElementById('PauloCallebaut').classList.remove('hidden');
            setInterval(function () {
                MoveIt(0)
            }, 1300);

            document.getElementById('TellerFrame').classList.add('hidden');
            document.getElementById('EndlessScore').classList.remove('hidden');
            teller = 6;
            enabled = false;

        });

    }

    function MoveIt(chance) {
        //Deze code tot de * heb ik gevonden op het internet maar de exacte bron vindt ik niet meer terug

        let spaceW = screen.height - photo.height;
        let spaceH = screen.width - photo.width;

        //random movement for the image
        photo.style.top = Math.round(Math.random() * spaceW) + "px";
        photo.style.left = Math.round(Math.random() * spaceH) + "px";
        //*

        if (Math.random() <= chance) {
            //when random is under or equal to 20%, the image will change to a bomb.
            photo.src = '../Eindwerk1/fotos/Bom.png';
        } else {
            photo.src = "../Eindwerk1/fotos/PauloCallebaut.jpeg";
        }
    };

    let scoreInterval = setInterval(ScoreSec, 1000);
    //function for the score
    function ScoreSec() {

        document.getElementById('ScoreBoard').innerHTML = score;
        score--;

        //when score is 0, game over.
        if (score <= 0) {
            document.getElementById('GameOver').classList.remove('hidden');
            clearInterval(scoreInterval);

            document.getElementById('PauloCallebaut').classList.add('hidden');
            document.getElementById('yourScore').innerHTML = teller;

        }

    }

    function Teller() {

        document.getElementById('PauloCallebaut').addEventListener('click', function () {

            if (teller === 4) { //When Teller is 5, You can go to the next level.

                auwtch.play();

                document.getElementById('LevelBoard').classList.remove('hidden');
                teller++;
                document.getElementById('Teller').innerHTML = teller;

                teller = 0;
                document.getElementById('PauloCallebaut').classList.add('hidden');

            } else if (photo.getAttribute('src') === '../Eindwerk1/fotos/Bom.png') { // when te source of the image is a bomb, your score will decrease by 100

                //Play the boom sound
                boom.play();

                //you will lose 100pts when click on the wrong image
                score -= 100;
                document.getElementById('ScoreBoard').innerHTML = score;
            } else {

                //recieve 10pts when click on the right image
                if (enabled === true) {
                    score += 10;
                }

                document.getElementById('ScoreBoard').innerHTML = score;

                //When pressed on the picture, a sound will appear.
                auwtch.play();

                teller++;
                document.getElementById('Teller').innerHTML = teller;

                let dir = document.getElementById('EndlessScore'),
                    endGameScore;

                localStorage.setItem('endGameScore', teller);
                endGameScore = localStorage.getItem('endGameScore');
                dir.innerHTML = endGameScore;

                localStorage.removeItem('endGameScore', teller);
            }
        })
    };

    let interval = null;

    function intervals() {

        //An interval for the different levels
        switch (level) {
            case 1:
                interval = setInterval(function () {
                    MoveIt(0.2)
                }, 1300);
                break;
            case 2:
                clearInterval(interval);
                Level2();

                interval = setInterval(function () {
                    MoveIt(0.35)
                }, 1100);
                break;
            case 3:
                clearInterval(interval);
                Level3();

                interval = setInterval(function () {
                    MoveIt(0.5)
                }, 1000);
                break;
            case 4:
                clearInterval(interval);

                EndlessLevel();
        }
    }

    function furtherLevel() {

        //To start a new level
        document.getElementById('LevelBoard').addEventListener('click', function () {

            document.getElementById('LevelBoard').classList.add('hidden');
            document.getElementById('Start').classList.remove('hidden');
        })
    };

    window.addEventListener('load', function () {

        Teller();
        /*every second, your score will drop*/
        setInterval(scoreInterval);

        document.getElementById('Start').addEventListener('click', function () {

            level++;
            console.log(level);

            document.getElementById('Start').classList.add('hidden');
            document.getElementById('PauloCallebaut').classList.remove('hidden');

            intervals();
            furtherLevel();


        });
    });

})();