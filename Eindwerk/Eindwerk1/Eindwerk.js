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

    function Level2(){
        document.body.style.backgroundImage = "Url('../Eindwerk1/fotos/BackgroundLvl2.jpg')";
        document.getElementById('NextLevels').innerHTML = 'Level 2';

        
    }

    function Level3() {
        document.body.style.backgroundImage = "Url('../Eindwerk1/fotos/BackgroundLvl3.jpg')";
        document.getElementById('NextLevels').innerHTML = 'Level 3';
    }
    
    function EndlessLevel() {

        document.body.style.backgroundImage = "Url('../Eindwerk1/fotos/BackgroundEndless.jpg')";
        document.getElementById('NextLevels').innerHTML = 'Endless Level';
        document.getElementById('ScoreBoard').style.color = 'white'

        document.getElementById('LevelBoard').classList.add('hidden');
        document.getElementById('EndlessBoard').classList.remove('hidden');

        document.getElementById('EndlessLvl').addEventListener('click', function () {
            document.getElementById('EndlessBoard').classList.add('hidden');
            setInterval(function () {
                MoveIt(0)
            }, 13000);

            document.getElementById('TellerFrame').classList.add('hidden');
            teller = 6;
            console.log(teller);
        });

    }

    function localStorage () {
        if (typeof(Storage) !== "undefined") {
            
            localStorage.setItem("HighScore", teller);
            
            document.getElementById("highScoreStorage").innerHTML = localStorage.getItem("HighScore");
          } else {
            document.getElementById("highScoreStorage").innerHTML = "Sorry, your browser does not supp localStorage.";
          }
    }

    function MoveIt(chance) {

        let spaceW = screen.height - photo.height;
        let spaceH = screen.width - photo.width;

        //random movement for the image
        photo.style.top = Math.round(Math.random() * spaceW) + "px";
        photo.style.left = Math.round(Math.random() * spaceH) + "px";

        if (Math.random() <= chance) {
            //when random is under or equal to 20%, the image will change to a bomb.
            photo.src = '../Eindwerk1/fotos/Bom.png';
        } else {
            photo.src = "../Eindwerk1/fotos/PauloCallebaut.jpeg";
        }
    };

    let scoreInterval = setInterval(ScoreSec, 1000);
    /*function for the score*/
    function ScoreSec() {

        document.getElementById('ScoreBoard').innerHTML = score;
        score--;

        //when score is 0, game over.
        if (score <= 0) {
            document.getElementById('GameOver').classList.remove('hidden');
            clearInterval(scoreInterval);
            
            document.getElementById('PauloCallebaut').classList.add('hidden');
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

                score -= 100;
                document.getElementById('ScoreBoard').innerHTML = score;
            } else {

                //score += 20;
                document.getElementById('ScoreBoard').innerHTML = score;

                //When pressed on the picture, a sound will appear.
                auwtch.play();

                teller++;
                document.getElementById('Teller').innerHTML = teller;
                console.log(teller);
            }
        })
    };

    let interval = null;

    function intervals () {

    
        switch (level) {
            case 1: 
                interval = setInterval(function () {
                    MoveIt(0.2)
                }, 13000);

                console.log(level);
                break;
            case 2: 
            clearInterval(interval);
                Level2();

                interval = setInterval(function () {
                    MoveIt(0.35)}, 10000
                );
                break;
            case 3:
                clearInterval(interval);
                Level3();

                interval = setInterval(function () {
                    MoveIt(0.2)}, 13000
                );
                break;
            case 4:
                clearInterval(interval);

                console.log(level);
                EndlessLevel();
        }
    }

    function furtherLevel () {

        document.getElementById('LevelBoard').addEventListener('click', function () {

            document.getElementById('LevelBoard').classList.add('hidden');
            document.getElementById('Start').classList.remove('hidden');
        })};

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
            localStorage();

        });
    });

})();