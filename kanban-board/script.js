const dragItem = document.querySelectorAll('.drag__item');
const dragList = document.querySelectorAll('.drag__item-list');

let selectItem;

dragItem.forEach((item)=>{
    item.addEventListener('dragstart',onDragStart);
});

dragList.forEach((list)=>{
    list.addEventListener('dragover',dragOver);
    list.addEventListener('dragenter',dragEnter);
    list.addEventListener('drop',onDrop)
});


function onDrop(){
    this.append(selectItem);
    selectItem = null;
}

function onDragStart(){
    selectItem=this;
    console.log(selectItem);
}

function dragEnter(e){
    e.preventDefault();
}

function dragOver(e){
    e.preventDefault();
}