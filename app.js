document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray = [
    {
        name: 'fries',
        img:  'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img:  'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:  'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:  'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img:  'images/milkshake.png'
    },
    {
        name: 'pizza',
        img:  'images/pizza.png'
    },
    {
        name: 'fries',
        img:  'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img:  'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:  'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img:  'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img:  'images/milkshake.png'
    },
    {
        name: 'pizza',
        img:  'images/pizza.png'
    }
    
]
cardArray.sort(()=> 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
const result = document.getElementById('result')
let cardChoosen =[]
let cardsChoosenId =[]
const cardWon =[]

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        /*
        notice how the flipCard does not come with a '()'
        which means the function will not be called automatically
        */
        gridDisplay.appendChild(card)
    }
    
}


function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChoosenId[0]
    const optionTwoId = cardsChoosenId[1]
  
    
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('you have clicked the same image') 
    }
    if (cardChoosen[0] === cardChoosen[1]){
        alert('you found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardWon.push(cardChoosen)
    }else{
        cards[optionOneId
        ].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
    }

    cardChoosen = []
    cardsChoosenId = []
    result.textContent = cardWon.length
    if(cardWon.length === cardArray.length/2){
        result.textContent= 'Congratulations you found them all.'
    }
}

function flipCard(){
 let cardId = this.getAttribute('data-id')
 cardChoosen.push(cardArray[cardId].name) 
 cardsChoosenId.push(cardId)
 this.setAttribute('src', cardArray[cardId].img)
 if (cardChoosen.length === 2){
    setTimeout(checkForMatch, 500)
 }
}
createBoard()
})