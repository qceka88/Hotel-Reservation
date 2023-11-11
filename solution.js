let reservation =
{
    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
}

function changeContent(className) {
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));
    if( document.querySelector(`.${className}`) != null){
    document.querySelector(`.${className}`).classList.remove('hidden');
    }
}

document.querySelector('#new-reservation').addEventListener('click', (e) => cleanData(e));
document.querySelector('#search-back-btn').addEventListener('click', (e) => fillSearchForm(e));
document.querySelectorAll('.room-type').forEach(room => {
    room.addEventListener("click", (e) => selectRoomType(e))
});
document.querySelector('#search-next-btn').addEventListener('click', (e) => findRoom(e));
changeContent('search-form-content');
document.querySelector('#search-form-button').addEventListener('click', (e) => searchFormData(e));


function cleanData(e) {
    changeContent('search-form-content');
}


function fillSearchForm(e) {
    e.preventDefault();
    changeContent('search-form-content');
    document.querySelector('#check-in').value = reservation.startDate;
    document.querySelector('#check-out').value = reservation.endDate;
    document.querySelector('#people').value = reservation.guestsCount;
}

function selectRoomType(e) {
    let myTarget = undefined;
    e.preventDefault;
    if (e.target.querySelector('img') != null) {
        myTarget = e.target;
    } else {
        myTarget = e.target.parentElement;
    }
    document.querySelectorAll('.room-type').forEach(room =>
        room.classList.remove('selected-room'));
    myTarget.classList.add('selected-room');
}



function findRoom(e) {
    e.preventDefault();
    const roomInfo = e.target.parentElement.parentElement.querySelector('.selected-room h4').textContent;
    reservation.roomType = roomInfo;
    console.log(reservation);
    changeContent('guest-details-form-content');



function searchFormData(e) {
    e.preventDefault();
    const data = e.target.parentElement;
    const checkIn = data.querySelector('#check-in').value;
    const checkOut = data.querySelector('#check-out').value;
    const people = data.querySelector('#people').value;
    if (checkIn != '' && checkOut != '' && people != '' &&
        new Date(checkIn) <= new Date(checkOut)) {
        reservation.startDate = checkIn;
        reservation.endDate = checkOut;
        reservation.guestsCount = people;
        console.log(reservation);
        changeContent('search-result-form-content');
    }
}
