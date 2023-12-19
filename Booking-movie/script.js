const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');

let price = +movieSelect.value;


container.addEventListener('click',e=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelected();
    }
});

movieSelect.addEventListener('change',e=>{
    price = +e.target.value;
    setMovieData(e.target.selectedIndex,e.target.value);
    updateSelected();
});

function updateSelected(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const countSeats = selectedSeats.length;
    const seatsIndex = [...selectedSeats].map(seat=>[...seats].indexOf(seat));
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    count.innerText = countSeats;
    total.innerText = countSeats*price;
}

function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('movieIndex',movieIndex);
    localStorage.setItem('moviePrice',moviePrice);
}

function showData(){
    const selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));
    const selectedmovieIndex = localStorage.getItem('movieIndex')
    seats.forEach((seat,index)=>{
        if(selectedSeats.indexOf(index)>-1){
            seat.classList.add('selected')
        }
    });
    if(selectedmovieIndex != null){
        movieSelect.selectedIndex = selectedmovieIndex;
    }
}

showData();
updateSelected();