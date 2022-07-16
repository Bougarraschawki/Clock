
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const dd = document.querySelector('#dd');

const time = document.querySelector('.time');

const myOclock = () => {

    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;

    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    if(hour< 10) {
        hour = '0' + hour;
    }

    if(minute < 10) {
        minute = '0' + minute;
    }

    if(second < 10) {
        second = '0' + second;
    }

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    let html2 = `
        <span>${hour}</span> :
        <span>${minute}</span> :
        <span>${second}</span> 
    `
time.innerHTML = html2;
}

let day = new Date();
let d = day.toDateString();
console.log(d);

let html = `
        <span>Today is <b style="color: #ff7e70">${d}</b> <img style="top: -10px; left: 320px;" src="image/Calendar_perspective_matte.png"></img></span> `;
        
dd.innerHTML = html;


if(navigator.geolocation){
    myPos = navigator.geolocation.watchPosition((position) => {
        document.getElementById('map').innerHTML = `<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&;layer=mapnik"></iframe>`;
        
        console.log(position);
    }, 
    (error) => {
        console.log(error)
    }
)}

setInterval(myOclock, 1000);
