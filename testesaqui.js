let carousel = [1, 2, 3, 4, 5];
let totalArray = carousel.length;

[carousel[totalArray - 1], ...carousel, carousel[0]].map((element, index) => {
  console.log(element);
});