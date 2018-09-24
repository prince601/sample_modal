// get the modal element
var modal = document.getElementById('simpleModal');
//get the modal button

var modalBtn = document.getElementById('modalBtn');

//get the close Btn

// var closeBtn = document.getElementById('closeBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
//create a  eventListener for a click

modalBtn.addEventListener('click', openModal);
//listen for close click\
closeBtn.addEventListener('click', closeModal);
//for outside click
window.addEventListener('click', clickOutSide);

//create a function open modal

function openModal(){
    modal.style.display = 'block';
}
function closeModal(){
    modal.style.display = 'none';
}

//close the modal if click ouside

function clickOutSide(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}






