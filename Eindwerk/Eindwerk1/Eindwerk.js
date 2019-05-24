;;
(function () {
    'use strict';

    /*The global score */
    let score = 500;

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

        clearInterval(MoveIt(), 0);
    }

    function Level3() {
        document.body.style.backgroundImage = "Url('../Eindwerk1/fotos/BackgroundLvl3.jpg')";
        document.getElementById('NextLevels').innerHTML = 'Level 3';
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

    /*function for the score*/
    function ScoreSec() {

        document.getElementById('ScoreBoard').innerHTML = score;
        score--;
        
    }

    function Teller() {

        document.getElementById('PauloCallebaut').addEventListener('click', function () {

            if (teller === 4) { //When Teller is 5, You can go to the next level.

                auwtch.play();

                document.getElementById('LevelBoard').classList.remove('hidden');
                teller++;
                document.getElementById('Teller').innerHTML = teller;

                teller = 0;
            } else if (photo.getAttribute('src') === '../Eindwerk1/fotos/Bom.png') { // when te source of the image is a bomb, your score will decrease by 100

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
        })
    };

    function furtherLevel () {

        document.getElementById('LevelBoard').addEventListener('click', function () {

            document.getElementById('LevelBoard').classList.add('hidden');
            document.getElementById('Start').classList.remove('hidden');
        })};

    window.addEventListener('load', function () {

        Teller();
        setInterval(ScoreSec, 1000);

        document.getElementById('Start').addEventListener('click', function () {

            level+=1;

            document.getElementById('Start').classList.add('hidden');
            document.getElementById('PauloCallebaut').classList.remove('hidden');
            
            /*every second, your score will drop*/
            

            switch (level) {
                case 1:
                    setInterval(function () {
                        MoveIt(0.2)}, 1300
                    )
                    console.log('lvl1');
                    break;
                case 2: 

                    Level2();

                    setInterval(function () {
                        MoveIt(0.35)}, 1000
                    )
                    console.log(level);
                    console.log('lvl2');
                    break;
                case 3:

                    Level3();

                    setInterval(function () {
                        MoveIt(0.2)}, 1300
                    )
                    break;
            }

            furtherLevel();
        });
    });

})();