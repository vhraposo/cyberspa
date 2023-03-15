import {Router} from "./router.js"


const router = new Router()
router.add('/', "/pages/home.html")
router.add("/universo.html", "/pages/universo.html")
router.add("/exploracao.html", "/pages/exploracao.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


const universeScreen = document.querySelector('.universeScreen')
const homeScreen = document.querySelector('.homeScreen')
const explorationScreen = document.querySelector('.explorationScreen')


const homeButton = document.querySelector('#homeButton')

const universeButton = document.querySelector('#universeButton')

const explorationButton = document. querySelector('#explorationButton')




universeScreen.addEventListener('click', function(){
    removeAllBgs()
    document.querySelector('html').classList.add('bg2')
    
})


explorationScreen.addEventListener('click', function(){
    removeAllBgs()
    document.querySelector('html').classList.add('bg3')
    
})


homeScreen.addEventListener('click', function(){
    removeAllBgs()
    document.querySelector('html').classList.add('bg1')
    
})

function removeAllBgs(){
    document.querySelector('html').classList.remove('bg1')
    document.querySelector('html').classList.remove('bg2')
    document.querySelector('html').classList.remove('bg3')
    
    
}
homeButton.addEventListener('click', function(){
    removeAllWhiteColors()
    homeButton.style.color = 'black'
})

universeButton.addEventListener('click', function(){
    removeAllWhiteColors()
    universeButton.style.color = 'black'
})

explorationButton.addEventListener('click', function(){
    removeAllWhiteColors()
    explorationButton.style.color = 'black'
})

function removeAllWhiteColors(){
    homeButton.style.color = 'white'
    universeButton.style.color = 'white'
    explorationButton.style.color = 'white'
}






const jhonnyImg = document.getElementById("jhonnyImg")
//  const judyImg = document.querySelector('#judyImg')
//  const kerryImg = document.querySelector('#kerryImg')
//  const pananImg = document.querySelector('#pananImg')
//  const rogueImg = document.querySelector('#rogueImg')
//  const riverImg = document.querySelector('#riverImg')

//  jhonnyImg.addEventListener('click', () =>{
//       alert('alo')
//  })

fetch('pages/exploracao.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const jhonnyImg = doc.querySelector('#jhonnyImg');

    console.log(jhonnyImg);

    
    jhonnyImg.addEventListener('click', () => {
      console.log('O evento de clique está funcionando!');
    });
})
.catch(error => console.log(error));

