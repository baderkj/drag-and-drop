let input=document.querySelector('#inp');
let btn=document.querySelector('#btn');
let box=document.querySelectorAll('.box');
// let item=document.querySelector('.inputs');
let drag=null;
btn.onclick=function add(){
	if(inp.value !=''){
	box[0].innerHTML +=`
	<p class="item" draggable="true">${inp.value}<p/>
	`
	inp.value='';
}
dragItem();
}
 

 function dragItem(){
 	let items=document.querySelectorAll('.item');
 	items.forEach((item)=>{
 		item.addEventListener('dragstart',function(){
 			drag=item;
 			item.style.opacity='0.5';
 		});

		 item.addEventListener('dragend',function(){
		 drag=null;
		 item.style.opacity='1';

 	});
		 box.forEach(box=>{
		 	box.addEventListener('dragover',function(e){
		 		e.preventDefault();
		 		this.style.background="#090";
		 		this.style.color='white';

		 	});
       box.addEventListener('dragleave',function(){
 		  this.style.background="white";
		  this.style.color='black';

		 	});
     	box.addEventListener('drop',function(){
     		this.append(drag);
     		this.style.background="white";
		    this.style.color='black';
     	});

		 });

		});
 }


