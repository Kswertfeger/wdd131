const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
radius = 4;
area = radius * radius * PI;

function circleArea(radius, PI) {
    const area = radius * radius * PI
    return area
}

area = circleArea(3, PI)
console.log(area)