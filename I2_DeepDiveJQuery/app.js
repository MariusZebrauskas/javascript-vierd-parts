// var q = $("ul.people li");
// console.log(q);
let button = $('button');
var q = $('.jim');
let toggler = false;
button.on('click', () => {
  if (toggler === false) {
    q.fadeOut();
    return (toggler = true);
  } else if (toggler === true) {
    q.fadeIn();
    return (toggler = false);
  }
});
