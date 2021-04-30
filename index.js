let slideIndex = [1, 1, 1, 1, 1, 1, 1];
let slideId = [
  "mySlides1",
  "mySlides2",
  "mySlides3",
  "mySlides4",
  "mySlides5",
  "mySlides6",
  "mySlides7",
];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);

function plusSlides(n, num) {
  showSlides((slideIndex[num] += n), num);
}

function showSlides(n, num) {
  let i;
  let x = document.getElementsByClassName(slideId[num]);
  if (n > x.length) {
    slideIndex[num] = 1;
  }
  if (n < 1) {
    slideIndex[num] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[num] - 1].style.display = "block";
}
