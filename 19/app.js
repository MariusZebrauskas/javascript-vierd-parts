// long running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log('finished function');
}

function clickHandler() {
  target.innerText = parseInt(target.innerText) + 1;
}

let target = document.querySelector('.target');
target.innerText = 1;


// listen for the click event
target.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
