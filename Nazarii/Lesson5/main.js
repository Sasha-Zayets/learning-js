const hideDiv = document.querySelector('.text-block');
const value = document.querySelector('.button');

function myFunction() {

  if (value.innerHTML == "Show Block") {
    value.innerHTML = "Fade block";
  } else {
  	value.innerHTML = "Show Block";
  }

};


value.addEventListener('click', (event) => {

  if (value.innerHTML == "Fade block") {
    hideDiv.classList.remove('hide');
		value.classList.add('active');
  } else if (value.innerHTML == "Show Block") {
		hideDiv.classList.add('hide');
		value.classList.remove('active');
  }

});
