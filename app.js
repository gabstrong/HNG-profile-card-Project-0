const timeEl = document.getElementById("user-time");

// Display current time in milliseconds
function updateTime() {
  timeEl.textContent = Date.now();
}

updateTime();

//Optional: You could update it every second:

setInterval(updateTime, 1000);

let profilePic = document.querySelector('.images');
let inputFile = document.getElementById('input-file');
console.log(profilePic)
inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}
