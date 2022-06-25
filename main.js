var bar = document.querySelector('header .container .fa-bars');
var nav = document.querySelector('header .container nav');
var times = document.querySelector('header .container .fa-times')

bar.onclick = () => {
    nav.classList.toggle('active');
    bar.style.display = "none";
    times.style.display = "inline-block";

}
times.onclick = () => {
    nav.classList.remove('active');
    bar.style.display = "inline-block";
    times.style.display = "none";
}



window.onscroll = () => {
    nav.classList.remove('active');
    bar.style.display = "inline-block";
    times.style.display = "none";
}