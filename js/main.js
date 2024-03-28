let boxList = document.querySelector('.box-list')

for(let i=0; i<480; i++){
    let cBoxItem = document.createElement('div');
    cBoxItem.className = 'box-item'

    cBoxItem.addEventListener('mouseenter', ()=>{
        console.log('come in');
        cBoxItem.style.background = 'RED'

    })

    cBoxItem.addEventListener('mouseleave',()=>{
        console.log('come out');
        cBoxItem.style.background = ''
    })

    boxList.appendChild(cBoxItem)
}

const clap = document.querySelector("#clap");
const hihat = document.querySelector("#hihat");
const kick = document.querySelector("#kick");
const openhat = document.querySelector("#openhat");
const boom = document.querySelector("#boom");
const ride = document.querySelector("#ride");
const snare = document.querySelector("#snare");
const tom = document.querySelector("#tom");
const tink = document.querySelector("#tink");

const dropZone1 = document.querySelector("#dropZone1");
const dropZone2 = document.querySelector("#dropZone2");
const dropZone3 = document.querySelector("#dropZone3");
const dropZone4 = document.querySelector("#dropZone4");
const dropZone5 = document.querySelector("#dropZone5");
const dropZone6 = document.querySelector("#dropZone6");
const dropZone7 = document.querySelector("#dropZone7");
const dropZone8 = document.querySelector("#dropZone8");
const dropZone9 = document.querySelector("#dropZone9");


let draggedPiece;

function startedDragging(){
    console.log("dragStart called");
    draggedPiece = this;
}

function draggedOver(e){
    console.log("draggedOver called");
    e.preventDefault();
}

function dropped(e){
    console.log("item was dropped");
    e.preventDefault();
    this.appendChild(draggedPiece);
    playAudio(draggedPiece.id, this)
    
}

function playAudio(selectedInstrument, selectedDropzone) {
    console.log(selectedInstrument);
    let instrument = document.createElement("audio");    
        instrument.src = `audio/${selectedInstrument}.wav`;
        instrument.load();
        selectedDropzone.appendChild(instrument); 
        instrument.loop = true;
        instrument.play();
}




clap.addEventListener("dragstart", startedDragging);
hihat.addEventListener("dragstart", startedDragging);
kick.addEventListener("dragstart", startedDragging);
openhat.addEventListener("dragstart", startedDragging);
boom.addEventListener("dragstart", startedDragging);
ride.addEventListener("dragstart", startedDragging);
snare.addEventListener("dragstart", startedDragging);
tom.addEventListener("dragstart", startedDragging);
tink.addEventListener("dragstart", startedDragging);

dropZone1.addEventListener("dragover", draggedOver);
dropZone1.addEventListener("drop",dropped);
dropZone2.addEventListener("dragover", draggedOver);
dropZone2.addEventListener("drop",dropped);
dropZone3.addEventListener("dragover", draggedOver);
dropZone3.addEventListener("drop",dropped);
dropZone4.addEventListener("dragover", draggedOver);
dropZone4.addEventListener("drop",dropped);
dropZone5.addEventListener("dragover", draggedOver);
dropZone5.addEventListener("drop",dropped);
dropZone6.addEventListener("dragover", draggedOver);
dropZone6.addEventListener("drop",dropped);
dropZone7.addEventListener("dragover", draggedOver);
dropZone7.addEventListener("drop",dropped);
dropZone8.addEventListener("dragover", draggedOver);
dropZone8.addEventListener("drop",dropped);
dropZone9.addEventListener("dragover", draggedOver);
dropZone9.addEventListener("drop",dropped);




// const audio = document.getElementById("myAudio");
// const audio2 = document.getElementById("myAudio2");


// bt1.addEventListener('click', ()=> {
//     // audio.load();
//     audio.loop = true;
//     audio.play();
// })

// bt2.addEventListener('click', ()=> {
    
//     audio2.loop = true;
//     audio2.play();
// })

