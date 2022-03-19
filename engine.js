let name_1 = document.getElementById("name_1");
let name_2 = document.getElementById("name_2");
let name_3 = document.getElementById("name_3");
let name_4 = document.getElementById("name_4");
let name_5 = document.getElementById("name_5");
let name_6 = document.getElementById("name_6");

let photo_1 = document.getElementById("photo_1");
let photo_2 = document.getElementById("photo_2");
let photo_3 = document.getElementById("photo_3");
let photo_4 = document.getElementById("photo_4");
let photo_5 = document.getElementById("photo_5");
let photo_6 = document.getElementById("photo_6");

let buttonMenu = document.getElementById('header__menu');
let listWrapper = document.getElementById('header__list');
let isMenuActive = false;
let isMenuOpen = false;




function testScreenWide(){

  if (window.matchMedia("(max-width: 545px)").matches) {

    isMenuActive = true;

    if(isMenuOpen == true){

      document.getElementById('header__list').getElementsByTagName('li')[1].style.display = 'block';
      document.getElementById('header__list').getElementsByTagName('li')[2].style.display = 'block';
      document.getElementById('header__list').getElementsByTagName('li')[3].style.display = 'block';



    } else if (isMenuOpen == false){

      document.getElementById('header__list').getElementsByTagName('li')[1].style.display = 'none';
      document.getElementById('header__list').getElementsByTagName('li')[2].style.display = 'none';
      document.getElementById('header__list').getElementsByTagName('li')[3].style.display = 'none';



    }
    
  
  
        
  } else {

    isMenuActive = false;
    isMenuOpen = false;

    buttonMenu.style.background = 'none';

    listWrapper.style.rowGap = '5px';

    document.getElementById('menu__line').style.display = 'block';
    
    document.getElementById('header__list').getElementsByTagName('li')[1].style.display = 'block';
    document.getElementById('header__list').getElementsByTagName('li')[2].style.display = 'block';
    document.getElementById('header__list').getElementsByTagName('li')[3].style.display = 'block';

    document.getElementById('header__list').getElementsByTagName('li')[1].style.background = 'none';
    document.getElementById('header__list').getElementsByTagName('li')[2].style.background = 'none';
    document.getElementById('header__list').getElementsByTagName('li')[3].style.background = 'none';

  }


}

document.onclick = event =>{


  
    if(isMenuActive == true && isMenuOpen == true){


      if(event.target.id != 'button' && event.target.id != 'arrow' && event.target.tagName != 'A' && event.target.tagName != 'LI'){

  
        document.getElementById('header__list').getElementsByTagName('li')[1].style.display = 'none';
        document.getElementById('header__list').getElementsByTagName('li')[2].style.display = 'none';
        document.getElementById('header__list').getElementsByTagName('li')[3].style.display = 'none';
    
        document.getElementById('menu__line').style.display = 'block';
    
        buttonMenu.style.background = 'none';
    
        listWrapper.style.rowGap = '5px';
    
        isMenuOpen = false;
  
  
  
  
      }


    }

 



  



}

testScreenWide();
setInterval(testScreenWide, 10); 



buttonMenu.onclick = event =>{

  if (isMenuActive == true && isMenuOpen == false){

    document.getElementById('header__list').getElementsByTagName('li')[1].style.display = 'block';
    document.getElementById('header__list').getElementsByTagName('li')[2].style.display = 'block';
    document.getElementById('header__list').getElementsByTagName('li')[3].style.display = 'block';

    document.getElementById('header__list').getElementsByTagName('li')[1].style.background = 'rgb(255, 255, 255, 0.3';
    document.getElementById('header__list').getElementsByTagName('li')[2].style.background = 'rgb(255, 255, 255, 0.3';
    document.getElementById('header__list').getElementsByTagName('li')[3].style.background = 'rgb(255, 255, 255, 0.3';

    document.getElementById('menu__line').style.display = 'none';

    listWrapper.style.rowGap = '0px';


    isMenuOpen = true;

  


  } else if (isMenuActive == true && isMenuOpen == true){

    document.getElementById('header__list').getElementsByTagName('li')[1].style.display = 'none';
    document.getElementById('header__list').getElementsByTagName('li')[2].style.display = 'none';
    document.getElementById('header__list').getElementsByTagName('li')[3].style.display = 'none';

    document.getElementById('menu__line').style.display = 'block';

    buttonMenu.style.background = 'none';

    listWrapper.style.rowGap = '5px';

    isMenuOpen = false;

  }




}



























name_1.addEventListener('mouseenter', e => {

  photo_1.style.filter = 'drop-shadow(0px 0px 20px rgba(44, 176, 249, 0.5))';

  });

  name_1.addEventListener('mouseleave', e => {

    photo_1.style.filter = 'none';
  

  });

  photo_1.addEventListener('mouseenter', e => {

    photo_1.style.filter = 'drop-shadow(0px 0px 20px rgba(44, 176, 249, 0.5))';
  
    });
  
    photo_1.addEventListener('mouseleave', e => {
  
      photo_1.style.filter = 'none';
    
  
});

name_2.addEventListener('mouseenter', e => {

    photo_2.style.filter = 'drop-shadow(0px 0px 20px rgba(44, 176, 249, 0.5))';
  
    });
  
    name_2.addEventListener('mouseleave', e => {
  
      photo_2.style.filter = 'none';
    
  
    });
  
    photo_2.addEventListener('mouseenter', e => {
  
      photo_2.style.filter = 'drop-shadow(0px 0px 20px rgba(44, 176, 249, 0.5))';
    
      });
    
      photo_2.addEventListener('mouseleave', e => {
    
        photo_2.style.filter = 'none';
      
    
  });

  name_3.addEventListener('mouseenter', e => {

    photo_3.style.filter = 'drop-shadow(0px 0px 20px rgba(44, 176, 249, 0.5))';
  
    });
  
    name_3.addEventListener('mouseleave', e => {
  
      photo_3.style.filter = 'none';
    
  
    });
  
    photo_3.addEventListener('mouseenter', e => {
  
      photo_3.style.filter = 'drop-shadow(0px 0px 20px rgba(44, 176, 249, 0.5))';
    
      });
    
      photo_3.addEventListener('mouseleave', e => {
    
        photo_3.style.filter = 'none';
      
    
  });

  name_4.addEventListener('mouseenter', e => {

    photo_4.style.filter = 'drop-shadow(0px 0px 20px rgba(44, 176, 249, 0.5))';
  
    });
  
    name_4.addEventListener('mouseleave', e => {
  
      photo_4.style.filter = 'none';
    
  
    });
  
    photo_4.addEventListener('mouseenter', e => {
  
      photo_4.style.filter = 'drop-shadow(0px 0px 20px rgba(44, 176, 249, 0.5))';
    
      });
    
      photo_4.addEventListener('mouseleave', e => {
    
        photo_4.style.filter = 'none';
      
    
  });

  name_5.addEventListener('mouseenter', e => {

    photo_5.style.filter = 'drop-shadow(0px 0px 20px rgba(44, 176, 249, 0.5))';
  
    });
  
    name_5.addEventListener('mouseleave', e => {
  
      photo_5.style.filter = 'none';
    
  
    });
  
    photo_5.addEventListener('mouseenter', e => {
  
      photo_5.style.filter = 'drop-shadow(0px 0px 20px rgba(44, 176, 249, 0.5))';
    
      });
    
      photo_5.addEventListener('mouseleave', e => {
    
        photo_5.style.filter = 'none';
      
    
  });

  name_6.addEventListener('mouseenter', e => {

    photo_6.style.filter = 'drop-shadow(0px 0px 20px rgba(44, 176, 249, 0.5))';
  
    });
  
    name_6.addEventListener('mouseleave', e => {
  
      photo_6.style.filter = 'none';
    
  
    });
  
    photo_6.addEventListener('mouseenter', e => {
  
      photo_6.style.filter = 'drop-shadow(0px 0px 20px rgba(44, 176, 249, 0.5))';
    
      });
    
      photo_6.addEventListener('mouseleave', e => {
    
        photo_6.style.filter = 'none';
      
    
  });




          