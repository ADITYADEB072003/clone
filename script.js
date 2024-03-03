const img=document.querySelectorAll('.header-slider ul img');
const prev=document.querySelector('.control_prev');
const next=document.querySelector('.control_next');
let index=0;
function changeslide(){
    for(let i=0; i<img.length; i++){
    img[i].style.display='none';
}
img[index].style.display='block';
}
changeslide();

prev.addEventListener('click',(e)=>{
    if(index>0){
       index--;
    }
    else{
        index=img.length-1;
    }
    changeslide();
})
next.addEventListener('click',(e)=>{
    if(index<img.length-1){
       index++;
    }
    else{
        index=img.length+1;
    }
    changeslide();
})
