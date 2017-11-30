
  const header = document.querySelector(".title");
  const changeTextButton = document.querySelector(".btn.btn-info");
  const scissors = document.querySelector('#animation');
  const carousel = document.querySelector('.myCarousel');

  function changeText(){
    header.innerText = "Print this coupon or take a picture of the unique code and bring a friend. 50% off for you and every friend you bring. Ends at the end of the month! Happy holidays!" + "\n "+ "\n" + "Unique code:" + uuidv4(5);
    header.style.fontSize = "large";
    header.style.margin = "20px";
    header.style.border = "dashed";
    header.style.padding = "50px";
    changeTextButton.style.visibility = "hidden";
    scissors.style.visibility = 'visible';
    carousel.style.visibility = 'hidden';
  };

  function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }

  function myMove() {
    let elem = document.getElementById("animation");
    let pos = 0;
    let id = setInterval(frame, 20);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + '1000 px';
            elem.style.left = pos + 'px';

        }
    }
  }

  $(document).ready(function() {
 $('.carousel').carousel({interval: 5000});
});
