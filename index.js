let i = 0;
let txt = "NodeJS Backend Developer.";
let speed = 120;

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("user-detail-name").style.color = "white";
    document.getElementById("demo1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // reset the index when it reaches the end of the text
    i = 0;
    // clear the text
    document.getElementById("demo1").innerHTML = "";
    // make the recursive call
    document.getElementById("user-detail-name").style.color = "#71e281";
    setTimeout(typeWriter, speed);
  }
}

var myNav = document.getElementById("nav-menu");
var myNav2 = document.getElementById("main");
window.onscroll = function () {
  if (document.documentElement.scrollTop >= 15) {
    myNav.classList.add("nav-colored");
    myNav2.classList.add("nav-colored");
    // myNav.classList.remove("nav-transparent");
  } else {
    // myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    myNav2.classList.remove("nav-colored");
  }
};

GitHubCalendar(".calendar", "KanhaChhirolya", {
  responsive: true,
  global_stats: false,
  tooltips: true,
});

function viewable() {
  window.open(
    "https://drive.google.com/file/d/19ECok2Y0TiAyqxwSn0lYLa1a3mBSejhe/view?usp=sharing"
  );
};

document.getElementById("resume-button-1").onclick = viewable



document.getElementById("resume-button-2").onclick = viewable

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.display = "block";
}
