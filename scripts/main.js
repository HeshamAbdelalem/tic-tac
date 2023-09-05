console.log('1');

let squares = document.querySelectorAll('.square');

console.log(Array(squares));

squares.forEach((el) => {
  el.addEventListener('click', () => console.log(el));
});
