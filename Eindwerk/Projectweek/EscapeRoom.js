function Easy() {

    //gives a name to the image
    picture = document.getElementById('RedBall');
  
    spaceW = screen.height - picture.height;
    spaceH = screen.width - picture.width;
  
    //set the interval to 750ms
    setInterval(MoveIt, 775);
  };
  
  function Difficult() {
  
    //gives a name to the image
    picture = document.getElementById('RedBall');
  
    spaceW = screen.height - picture.height;
    spaceH = screen.width - picture.width;
  
    //sets the interval to 400ms
    setInterval(MoveIt, 600);
  
  };
  
  function MoveIt() {
  
    //random movement for the image
    picture.style.top = Math.round(Math.random() * spaceW) + "px";
    picture.style.left = Math.round(Math.random() * spaceH) + "px";
  };
  
  function WinnerFrame() {
    // Shows the WinnerWindow
    document.getElementById('WinnerFrame').classList.remove('WinnerFrame--Hide');
  };
  
  window.addEventListener('load', function () {
  
    //Teller shows how many times you pressed on the red pic.
    let teller = 0;
  
    document.getElementById('RedBall').addEventListener('click', function () {
  
  
  
      if (teller == 4) {
        document.getElementById('WinnerFrame').classList.remove('WinnerFrame--Hide');
      } else {
        teller++;
        console.log(teller);
        document.getElementById('Teller').innerHTML = teller;
      }
    });
  })