const buttons = document.querySelectorAll('.button'); // I got a nodeList from here
const body = document.querySelector('body');

// events
// we can put for each loop on nodelist
buttons.forEach(function (button) {
  // console.log(button);
  // now we add eventlistener on each button
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
