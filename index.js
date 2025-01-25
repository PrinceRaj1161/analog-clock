setInterval(() => 
{
    let time = new Date();
    let htime = time.getHours();
    let mtime = time.getMinutes();
    let stime = time.getSeconds();

    let hrotate = htime * 30 + mtime/2; 
    let mrotate = mtime * 6; 
    let srotate  = stime * 6;

    let hours = document.getElementsByClassName("hour")[0]; 
    let minutes = document.getElementsByClassName("minute")[0];
    let seconds = document.getElementsByClassName("second")[0];

    hours.style.transform = `rotate(${hrotate}deg)`;
    minutes.style.transform = `rotate(${mrotate}deg)`;
    seconds.style.transform = `rotate(${srotate}deg)`;


}, 1000);