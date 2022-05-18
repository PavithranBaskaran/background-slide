let Runner;
var i = 0;
var banner = document.querySelector(".banner");
var arr = [
  "https://www.pinkvilla.com/imageresize/vikram_poster_kamal_haasan_0.jpg?width=752&format=webp&t=pvorg",
  "https://i.scdn.co/image/ab67616d0000b27339fe640ab73db368eeac0f90",
  "https://i.ytimg.com/vi/Uw17HJkrGR0/maxresdefault.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg",
];

Runner = window.setInterval(() => {
    console.log(1) 
  banner.setAttribute=("style", `background: url("${arr[i++]}")`);

  if (i > arr.length - 1) {
    i = 0;
  }
}, 2 * 1000);


