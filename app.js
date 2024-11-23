let cardsArray = [
    {
        name:"C++",
        img:'images2/img1.png'
    },
    {
        name:'Java',
        img:'images2/img2.png'
    },
    {
        name:'python',
        img:'images2/img3.png'
    },
    {
        name:'MySql',
        img:'images2/img4.png'
    },
    {
        name:'javascript',
        img:'images2/img5.png'
    },
    {
        name:'CSS',
        img:'images2/img6.png'
    }

]


// duplicate the crads 

let gameCard = cardsArray.concat(cardsArray)



// shuffle the gamecard array 


function myArray(array){
  for(let i = 0;i< array.length;i++){
    let j = Math.floor(Math.random()* array.length)

    let temp = array[i];
     array[i] = array[j];
     array[j] = temp
  }
}

let shuffleArray = myArray(gameCard)


let parentDiv = document.querySelector("#card_section")
let clickCount = 0
let firstCard = ''
let secondCard = ''



//match the cards 
function gamingCard(){


     let match =document.querySelectorAll(".selected_Card")

     match.forEach((elem) => {
        elem.classList.add("match_Card")
     })

}

//reset game 
function resetGame(){
    clickCount = 0
    firstCard = ''
    secondCard =''


    let match =document.querySelectorAll(".selected_Card")

    match.forEach((elem) => {
       elem.classList.remove("selected_Card")
    })
}

// click event for each card 
let sound = new Audio('audio1.mp3')
parentDiv.addEventListener("click",(e) =>{
     sound.play()
      let curCard = e.target;
      clickCount++;

      if(clickCount < 3){
        if(clickCount === 1){
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add("selected_Card")            
        }else{
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add("selected_Card")  
        }
    }
    

        if(firstCard !== '' && secondCard !== ''){
            if(firstCard === secondCard){
              setTimeout(() => {
                gamingCard()
                resetGame()
              },1000)
            }else{
               setTimeout(() => {
                resetGame()
               },1000)
            }
        }

      if(curCard.id === 'card_section'){
        return false
      }

}) 







for(let i=0;i<=gameCard.length;i++){
    let childiv = document.createElement("div")
    childiv.classList.add("card")
    childiv.dataset.name = gameCard[i].name
    // back_Card.style.backgroundImage = `url(${gameCard[i].img})`
    let back_Card = document.createElement('div')
    back_Card.classList.add("back_Card")
    let front_Card = document.createElement('div')
    front_Card.classList.add('front_Card')

childiv.appendChild(back_Card)
    back_Card.style.backgroundImage = `url(${gameCard[i].img})`

childiv.appendChild(front_Card)

    parentDiv.appendChild(childiv)

}