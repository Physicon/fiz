
let container = document.querySelector('.container');
let kyrs = '';
let value;
let b = [];


window.addEventListener('DOMContentLoaded', init);

function init(){
fetch('http://krapipl.imumk.ru:8082/api/mobilev1/update', {
    method: 'POST',

    body: JSON.stringify({'data': ''}),

    headers: {

        'Content-Type': 'application/json',
      },  

    })  
  .then((response) => {  

      return response.text();  

    })
    .then((body) => {
      arr = JSON.parse(body); 
     
     for(let i = 0; i < arr['items'].length; i++){

      kyrs += `<div class="courses-sci">
        <div class="sci-figure">
        <img src="" alt="Демо-версия">

        </div>
        <div class="sci-info">
          <p class="sci-title">${arr['items'][i].title}</p>
          <p class="sci-grade">${arr['items'][i].grade}</p>
          <p class="sci-genre">${arr['items'][i].genre}</p>
          
          
          <p class="sci-meta"><a href="${arr['items'][i].shopUrl}">Подробнее</a></p>
          <p class="sci-controls">
            <input type="checkbox" id="bonus"> В рублях / в бонусах </>
            <a href="#" class="btn">${

              arr['items'][i].price
            
            } руб.</a>
              
          </p>
        
        </div>
        </div>
      `;


    
    }



      container.innerHTML = kyrs;

    //работа  бонусами
      let bon = document.querySelectorAll('#bonus');

      let btnBonus = document.querySelectorAll('.btn');

      for(let i = 0; i< bon.length; i++){
        bon[i].onclick = function(){
          if(bon[i].checked){
          btnBonus[i].innerHTML = arr['items'][i].priceBonus + ' бонусов';
          }else {
            btnBonus[i].innerHTML = arr['items'][i].price + ' рублей'
          }
        }
      }


      
  
     

    let select = document.querySelectorAll('select');

    for (let i = 0; i < select.length; i++){
      select[i].onchange = () =>{
        kyrs = '';
        container.innerHTML = '';

        if(select[i] == select[0]){
          let value = select[i].value;

        b = arr['items'].filter(function (elem) {
          
          return elem.subject == value;
        })

      } if(select[i] == select[1]){

        let value = select[1].value;

        b = b.filter(function (elem) {      
          return elem.genre == value;
        })


      }
      if(select[i] == select[2]){

        let value = select[2].value;
        console.log(value);
        b = b.filter(function (elem) {
          console.log(value);
          
          return elem.grade == value;
        })


      }

      for(let i = 0; i < b.length; i++){
 
        kyrs += `<div class="courses-sci">
          <div class="sci-figure">
          <img src="" alt="Демо-версия">
  
          </div>
          <div class="sci-info">
          <p class="sci-title">${b[i].title}</p>
          <p class="sci-grade">${b[i].grade}</p>
          <p class="sci-genre">${b[i].genre}</p>
          
          
          <p class="sci-meta"><a href="${b[i].shopUrl}">Подробнее</a></p>
          <p class="sci-controls">
          <input type="checkbox" id="bonus"> В рублях / в бонусах </>
          <a href="#" class="btn">${b[i].price} руб.</a>
              
          </p>
          </div>
          </div>
        `
        }        

        container.innerHTML = kyrs;
                //работа  бонусами
        let bon = document.querySelectorAll('#bonus');

        let btnBonus = document.querySelectorAll('.btn');

        for(let i = 0; i< bon.length; i++){
          bon[i].onclick = function(){
            if(bon[i].checked){
            btnBonus[i].innerHTML = arr['items'][i].priceBonus + ' бонусов';
            }else {
              btnBonus[i].innerHTML = arr['items'][i].price + ' рублей'
            }
          }
        }


    }
  }
    });

    //поиск
    document.querySelector('#search').oninput = function(e) {
      kyrs = '';
      e.preventDefault();
      let val = this.value.toLowerCase().trim().split('').join('');
      let v = val;

      let s = arr['items'].filter(function (elem) {  
        return elem.subject.toLowerCase().split() == v;
      });
      console.log(s);
      for(let i = 0; i < s.length; i++){
 
        kyrs += `<div class="courses-sci">
          <div class="sci-figure">
          <img src="" alt="Демо-версия">
  
          </div>
          <div class="sc/i-info">
          <p class="sci-title">${s[i].title}</p>
          <p class="sci-grade">${s[i].grade}</p>
          <p class="sci-genre">${s[i].genre}</p>
          
          
          <p class="sci-meta"><a href="${s[i].shopUrl}">Подробнее</a></p>
          <p class="sci-controls">
          <input type="checkbox" id="bonus"> В рублях / в бонусах </>
          <a href="#" class="btn">${s[i].price} руб.</a>
              
          </p>
  
          
          </div>
          </div>
        `
        }
        container.innerHTML = kyrs;
              //работа  бонусами
        let bon = document.querySelectorAll('#bonus');

        let btnBonus = document.querySelectorAll('.btn');

        for(let i = 0; i< bon.length; i++){
          bon[i].onclick = function(){
            if(bon[i].checked){
            btnBonus[i].innerHTML = arr['items'][i].priceBonus + ' бонусов';
            }else {
              btnBonus[i].innerHTML = arr['items'][i].price + ' рублей'
            }
          }
        }


      }

    }
  
//кнопка меню
document.querySelector('.gamburger').onclick = () => {
  document.querySelector('.main-menu').classList.toggle('menu-active');
};

