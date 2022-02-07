// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

// // document.querySelector('html').addEventListener('click', function() {
// //     alert('Ouch!,Yamete Kudasai Onichan!');
// //   });
  
//  let myHtml = document.querySelector('html');
//   myHtml.addEventListener('click', function (){
//     alert('bhosdike!,Tere Baap ka Webpage nahi hai');
//   });


let myImg = document.querySelector('img');
myImg.onclick = function(){
  let mySrc = myImg.getAttribute('src');
  if (mySrc==='images/firefox logo.jpg')
     {
       myImg.setAttribute('src','images/meme1.jpg')
     }
  else
      {
        myImg.setAttribute('src','images/firefox logo.jpg')
      }   
    };

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setusername()
   {
     let myName = prompt('Please Enter the name');
     if (!myName)
     {
       setusername();
     }
     else
     {
     localStorage.setItem('name',myName);
     myHeading.textContent = 'Mozilla is Shit, ' + myName ;
    }
   }

   if (!localStorage.getItem('name'))
   { 
     setusername();
   }
   else 
   {
     let storedName = localStorage.getItem('name');
     myHeading.textContent = 'Mozilla is shit, ' + storedName;

   }
   myButton.onclick = function() 
                         {
                            setusername();
                               }
