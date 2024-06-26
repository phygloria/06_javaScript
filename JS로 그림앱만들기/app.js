
const fileInput = document.getElementById("file") 
const modeBtn = document.getElementById("mode-btn")
const destroyBtn = document.getElementById("destroy-btn")
const eragerBtn = document.getElementById("erager-btn")
const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const cxt = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
cxt.lineWidth = lineWidth.value;

//빠르게 정사각형 색칠하고 대각선 나열하기
// cxt.rect(50, 50, 100, 100);
// cxt.rect(150, 150, 100, 100);
// cxt.rect(250, 250, 100, 100);
// cxt.fill();

// setTimeout (()=>{
//     cxt.beginPath();
//     cxt.fillStyle = "red";
//     cxt.rect(350, 350, 100, 100);
//     cxt.fill();
// }, 2000);

// setTimeout (()=>{
//     cxt.beginPath();
//     cxt.fillStyle = "black";
//     cxt.rect(450, 450, 100, 100);
//     cxt.fill();
// }, 3000);



// 수동으로 사각형 라인부터 그려서 색칠하기
// cxt.moveTo(50, 50);
// cxt.lineTo(150, 50);
// cxt.lineTo(150, 150);
// cxt.lineTo(50, 150);
// cxt.lineTo(50, 50);
// cxt.fill();


//도형그리기 1
// cxt.fillRect(200, 200, 50, 200);
// cxt.fillRect(400, 200, 50, 200);
// cxt.lineWidth = 2;
// cxt.fillRect(300, 300, 50, 100);
// cxt.fillRect(200, 200, 200, 30);
// cxt.moveTo(200, 200);
// cxt.lineTo(325,100);
// cxt.lineTo(450,200);
// cxt.fill();


//도형그리기 2
// cxt.fillRect(210+2, 200-35, 15, 100);
// cxt.fillRect(350+2, 200-35, 15, 100);
// cxt.fillRect(260+2, 200-35, 60, 200);

// cxt.arc(285, 100, 50, 0, 2 * Math.PI);
// cxt.fill();

// cxt.beginPath();
// cxt.fillStyle = "yellow";
// cxt.arc(260 +45, 90, 5, Math.PI, 2 * Math.PI);
// cxt.arc(220 +45, 90, 5, Math.PI, 2 * Math.PI);
// cxt.fill();


//라인에 색 입혀서 그리기
// cxt.lineWidth =2;
// const colors = [
//     "#f7d794",
//     "#63cdda",
//     "#778beb",
//     "#f3a683",
//     "#786fa6",
//     "#f8a5c2",
//     "#cf6a87",
//     "#596275",
//     "#e77f67",
//     "#ea8685"
// ]

// function onClick(event){
//     cxt.beginPath();
//     cxt.moveTo(400,400);
//     const color = colors[Math.floor(Math.random() *colors.length) ]
//     cxt.strokeStyle = color;
//     cxt.lineTo(event.offsetX, event.offsetY);
//     cxt.stroke();
// }
// canvas.addEventListener("click", onClick)


// 마우스가 클릭하고 움직이고 끝날때까지 그리기

let isPainting = false;
let isFilling = false;

function onMove(event) {
    if(isPainting){
        cxt.lineTo(event.offsetX, event.offsetY);
        cxt.stroke();
        // cxt.fill();
        return;
    }
    cxt.beginPath();
    cxt.moveTo(event.offsetX, event.offsetY);
}

function startPainting(){
    isPainting = true;
}
function cancelPainting(){
    isPainting = false;
}

function onLineWidthChange(event){
    cxt.lineWidth = event.target.value;
}


function onColorChange(event){
    // console.log();
    cxt.strokeStyle = event.target.value;
    cxt.fillStyle = event.target.value;
}


function onColorClick(event){
    // console.dir(event.target.dataset.color);
    const colorValue = event.target.dataset.color;
    cxt.strokeStyle = colorValue;
    cxt.fillStyle = colorValue;
    color.value = colorValue;
}


function onModeClick(){
    if(isFilling){
        isFilling = false
        modeBtn.innerText = "Fill"
    }else {
        isFilling = true
        modeBtn.innerText = "Draw"
    }
}

function onCavasClick(){
    if(isFilling){
        cxt.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    } 
}


function onDestroyClick(){
    cxt.fillStyle = "white"
    cxt.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEragerClick(){
    cxt.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill"
}

function onFileChange(event){
    const file = event.target.files[0];
    const url = URL.createObjectURL(file)
    console.log(url);
    const image = new Image()
    image.src = url;
    image.onload = function(){
        cxt.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        fileInput.value = null;
    }
}


canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCavasClick);

lineWidth.addEventListener("change", onLineWidthChange);

color.addEventListener("change", onColorChange)
colorOptions.forEach(color => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eragerBtn.addEventListener("click", onEragerClick);

fileInput.addEventListener("change", onFileChange)