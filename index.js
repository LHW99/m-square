function makeSquare(){
  let size = document.getElementById('size');
  let color = document.getElementById('color'); 
  let container = document.getElementById('container');
  let square = document.getElementById('square');

  if(size.value && color.value){
    container.style.height=size.value+'px';
    container.style.width=size.value+'px';
    square.style.background=color.value;
  } else {
    alert('Please enter a valid size/color combination')
  }
}