let squares = document.querySelectorAll('.square');
let turn = 'x';
let player1Name = document.querySelector('.player1Name');
let player2Name = document.querySelector('.player2Name');
let playerTurn = document.querySelector('#active-game  span');
let winnerMsg = document.querySelector('#active-game h3');
let headerName1 = document.querySelector('header .headerName1');
let headerName2 = document.querySelector('header .headerName2');
let player1Btn = document.querySelector('.player1 button');
let player2Btn = document.querySelector('.player2 button');
let cells = [];
let reset = document.querySelector('.reset');

function checkCells(cell1, cell2, cell3) {
  squares[cell1].classList.add('winner-squares');
  squares[cell2].classList.add('winner-squares');
  squares[cell3].classList.add('winner-squares');
  console.log('winner');

  if (squares[cell1].textContent == 'X') {
    document.querySelector('#active-game h3').textContent =
      'الفائز هو : ' + headerName1.textContent;
    document.querySelector('#active-game h3').classList.add('winner-h3');
    // document.querySelector('#active-game h3').style.color = 'red';
    playerTurn.textContent = '';
    console.log('X wins');
  } else if (squares[cell1].textContent == 'O') {
    document.querySelector('#active-game h3').textContent =
      'الفائز هو : ' + headerName2.textContent;
    document.querySelector('#active-game h3').classList.add('winner-h3');
    // document.querySelector('#active-game h3').style.color = 'red';

    console.log('O wins');
  }
  console.log(
    squares[cell1].textContent,
    squares[cell2].textContent,
    squares[cell3].textContent
  );
}

function checkWinner() {
  for (let i = 1; i < 10; i++) {
    cells[i - 1] = document.querySelector(`.item${i}`).textContent;
  }
  console.log(cells);

  if (cells[0] == cells[1] && cells[1] == cells[2] && cells[0] != '') {
    checkCells(0, 1, 2);
  } else if (cells[3] == cells[4] && cells[4] == cells[5] && cells[3] != '') {
    checkCells(3, 4, 5);
  } else if (cells[6] == cells[7] && cells[7] == cells[8] && cells[6] != '') {
    checkCells(3, 4, 5);
  } else if (cells[0] == cells[3] && cells[3] == cells[6] && cells[0] != '') {
    checkCells(0, 3, 6);
  } else if (cells[1] == cells[4] && cells[4] == cells[7] && cells[1] != '') {
    checkCells(1, 4, 7);
  } else if (cells[2] == cells[5] && cells[5] == cells[8] && cells[2] != '') {
    checkCells(2, 5, 8);
  } else if (cells[0] == cells[4] && cells[4] == cells[8] && cells[0] != '') {
    checkCells(0, 4, 8);
  } else if (cells[2] == cells[4] && cells[4] == cells[6] && cells[2] != '') {
    checkCells(2, 4, 6);
  }
}

player1Btn.addEventListener('click', () => {
  headerName2.textContent = player2Name.textContent;
  console.log(player1Name);
});

player2Btn.addEventListener('click', () => {
  headerName1.textContent = player1Name.textContent;
  console.log(player1Name);
});

squares.forEach((el) => {
  el.addEventListener('click', () => {
    if (turn === 'x' && el.innerHTML == '') {
      el.textContent = 'X';
      turn = 'o';
      playerTurn.textContent = '  ' + player2Name.textContent;
      playerTurn.style.color = 'blue';

      checkWinner();
    } else if (turn === 'o' && el.innerHTML == '') {
      el.textContent = 'O';
      turn = 'x';
      playerTurn.textContent = '  ' + player1Name.textContent;
      playerTurn.style.color = 'crimson';

      checkWinner();
    }
  });
});

reset.addEventListener('click', () => {
  for (let i = 0; i < squares.length; i++) {
    console.log((squares[i].textContent = ''));
  }

  document.querySelector('#active-game h3').textContent =
    ' : ' + headerName1.textContent;
  document.querySelector('#active-game h3').classList.remove('winner-h3');

  squares.forEach((el) => {
    el.classList.remove('winner-squares');
  });
  turn = 'x';
  winnerMsg.textContent = `الدور على ${
    document.querySelector('.name-span').textContent
  }`;

  // document.querySelector('#active-game h3').style.color = 'red';
  // console.log('X wins');

  // document.querySelector('#active-game h3').style.color = 'red';
  // console.log('O wins');

  // document.querySelector('#active-game').textContent = headerName1.textContent;
});

function resetGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    console.log(
      document.querySelector('#active-game h3').classList.add('winner-h3')
    );
  }
  // document.querySelector('#active-game').textContent = headerName1.textContent;
  // turn = 'x';

  winnerMsg.textContent = `turn ${player1Name}`;

  // location.reload();
}
