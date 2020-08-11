
const cards = document.querySelectorAll('.memory-card');

let 
  hasFlippedCard = false,
  firstCard, secondCard,
  lockBoard = false;


function flipCard(){
  if (lockBoard) return;
  // Если карточка  = firstCard, выходим  из функции
  if(this === firstCard) return;
  this.classList.add('flip');
 
  if(!hasFlippedCard){
    //при первом клике
    hasFlippedCard = true;
    firstCard = this;

  } else {
    //при втором клике
    //hasFlippedCard= false;
    secondCard = this;

  checkMatch();

  }

}

const checkMatch = () => {
  if(firstCard.dataset.card === secondCard.dataset.card){
    deleteAttributeCards();
  } else {
    turnCards();
  }
}

const  deleteAttributeCards = () => {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

const  turnCards = () => {
  lockBoard = true;

  setTimeout(() => {
    
    //lockBoard = true;

    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    //Если flip меняем на false
    lockBoard = false;

    resetBoard();
  }, 1000);
}

//Поведение при двойном клике
const resetBoard = () => {
  hasFlippedCard = false;
  [firstCard, secondCard] = [null, null];
}


cards.forEach(card => card.addEventListener('click', flipCard));

