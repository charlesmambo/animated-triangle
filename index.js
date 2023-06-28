// const canvas  = document.getElementById('my-canvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let atoms = [];
// // canvas.addEventListener('mousemove', (e) =>{
// //     for (let i = 0; i < 20; i++) {
// //         atoms.push(new Atom(e.x, e.y))
        
// //     }
// // });

// const animate = () =>{
//     atoms.forEach((atom, index) =>{
//         ctx.fillStyle = 'gold';
//         atom.draw();
//         atom.updateSpeed();
//         atom.updateSize();

//         if (atom.radius < 0.3){
//             atoms.splice(index, 1)
//         }
//     });
//     ctx.save();
//     //ctx.fillStyle = 'rgba(255,255,255, 0.2)';
//     ctx.fillStyle = 'rgb(0, 0, 0, 0.2)'
//     ctx.fillRect(0,0, canvas.width, canvas.height);
//     ctx.restore();
//     requestAnimationFrame(animate)
// }

// animate();

// class Atom {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//         this.radius = Math.random() * 2 + 2;
//         this.speedX = Math.random() * 4 - 3; //-2 +2
//         this.speedY  = Math.random() * 4 - 3; //-2 +2
//     }

//     updateSpeed(){
//         this.x += this.speedX;
//         this.y += this.speedY;
//     }
//     updateSize(){
//         this.xradius -= 0.1;
//     }

//     draw(){
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 20, Math.PI*2);
//         ctx.fill();
//     }
// }

// // AUTO GENERATE ATOMS FUNCTION
// const generateAtoms = () => {
//     atoms.push(new Atom(Math.random() * canvas.width, Math.random()* canvas.height));
//     requestAnimationFrame(generateAtoms)
// }
// generateAtoms();


// const canvas = document.getElementById('my-canvas2');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// class Point {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//         this.radius = 3;
//     }

//     draw(){
//         ctx.beginPath();
//         ctx.arc(this.x,this.y,this.radius, 0, Math.PI*2);
//         ctx.fill();
//     }
// }

// // TRIANGLE TOP
// const triangleTop = new Point(window.innerWidth /2, 50);
// triangleTop.draw();

// // BOTTOM LEFT TRIANGLE 
// const bottomTriangleLeft = new Point(50, window.innerHeight-50);
// bottomTriangleLeft.draw();

// // BOTTOM RIGHT TRIANGLE 
// const bottomTriangleRight = new Point(
//     window.innerWidth - 50,
//     window.innerHeight - 50
// );
// bottomTriangleRight.draw();

// const triangle = [triangleTop, bottomTriangleLeft, bottomTriangleRight];

// function getRandomInt(min, max){
//     return Math.floor(Math.random()* (max - min)) + min
// }

// function drawRest(prevPoint){
//     let randomCorner, middlePoint;

//     for (let i = 0; i < 10000; i++) {
//         //pick random corner
//         randomCorner = triangle[getRandomInt(0, 3)];
        
//         //find middle point
//         middlePoint = new Point(
//             (prevPoint.x + randomCorner.x) / 2,
//             (prevPoint.y + randomCorner.y) / 2
//         );
//         middlePoint.draw();
//         prevPoint = middlePoint;
//     }
// }

// canvas.addEventListener('click', function(e){
//     const firstPoint = new Point(e.x, e.y);
//     firstPoint.draw();
//     drawRest(firstPoint)
// },
// {once: true}
// )


const canvas = document.getElementById('my-canvas2');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Point {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const triangleTop = new Point(window.innerWidth / 2, 50, 'red');
triangleTop.draw();

const bottomTriangleLeft = new Point(50, window.innerHeight - 50, 'green');
bottomTriangleLeft.draw();

const bottomTriangleRight = new Point(
  window.innerWidth - 50,
  window.innerHeight - 50,
  'blue'
);
bottomTriangleRight.draw();

const triangle = [triangleTop, bottomTriangleLeft, bottomTriangleRight];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function drawRest(prevPoint) {
  let randomCorner, middlePoint;
  let i = 0;

  function animate() {
    randomCorner = triangle[getRandomInt(0, 3)];
    middlePoint = new Point(
      (prevPoint.x + randomCorner.x) / 2,
      (prevPoint.y + randomCorner.y) / 2,
      getRandomColor()
    );
    middlePoint.draw();
    prevPoint = middlePoint;

    i++;
    if (i < 10000) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

canvas.addEventListener(
  'click',
  function (e) {
    const firstPoint = new Point(e.x, e.y, 'purple');
    firstPoint.draw();
    drawRest(firstPoint);
  },
  { once: true }
);

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


