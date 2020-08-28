var screens = screen.width
if(screens>=400){
function stu(event){
var key = event.keyCode;
console.log(key)
if(key==13){
var str=document.getElementById("asd").value
document.getElementById("scores").innerHTML=" ";
var arrays=[
 {
 	name: "image1",
 	src: "image1.jfif"
 },
 {
 	name: "image1",
 	src: "image1.jfif"
 },
 {
 	name: "image2",
 	src: "image2.jfif"
 },
 {
 	name: "image2",
 	src: "image2.jfif"
 },
  {
 	name: "image3",
 	src: "image3.jfif"
 },
 {
 	name: "image3",
 	src: "image3.jfif"
 },
  {
 	name: "image4",
 	src: "image4.jfif"
 },
 {
 	name: "image4",
 	src: "image4.jfif"
 },
  {
 	name: "image5",
 	src: "image5.jfif"
 },
 {
 	name: "image5",
 	src: "image5.jfif"
 },
  {
 	name: "image6",
 	src: "image6.jfif"
 },
 {
 	name: "image6",
 	src: "image6.jfif"
 },
  {
 	name: "image7",
 	src: "image7.jfif"
 },
 {
 	name: "image7",
 	src: "image7.jfif"
 },
   {
 	name: "image8",
 	src: "image8.jfif"
 },
 {
 	name: "image8",
 	src: "image8.jfif"
 },
]
var array
var time
var virat= document.querySelector("div")
if(str=="2 * 3"){
    array=arrays.slice(0,6)
    console.log(array)
    time=350
    virat.classList.add("grid1")

}else if(str=="3 * 4"){
    array=arrays.slice(0,12)
    time=500
    virat.classList.add("grid")
    console.log(array)
}else{
    array=arrays
    time=600
    virat.classList.add("grid2")
    console.log(array)
}

imgsel=[]
imgid=[]
console.log(array)
array.sort(()=> {return .5 - Math.random()})
let p=document.querySelector("div")

for(let i=0;i<array.length;i++){
 	var x = document.createElement("img");
 	x.setAttribute("src","image.jfif")
 	x.setAttribute("id",i)
 	x.addEventListener("click",fun)
 	x.classList.add("im")
 	p.appendChild(x)
 }
var count=0
function fun(){
	pq=this.getAttribute("id")
    flip=array[pq].src
    this.src=flip;
    imgsel.push(flip)
    imgid.push(pq)
    count+=1
    if(imgsel.length==2){
    	setTimeout(check,time)   	
    }
}
var rohit=0
function check(){
	if(imgsel[0]==imgsel[1]){
    		if(imgid[0]==imgid[1]){
    			alert("Same Element was Clicked Twice")
    		var t=document.getElementById(imgid[1])
    		t.src="image.jfif"
    		imgsel=[]
    	    imgid=[]
    		}
    		else{
    		var s=document.getElementById(imgid[0])
    		var t=document.getElementById(imgid[1])
    		s.src="blank.jfif"
    		t.src="blank.jfif"
    		s.removeEventListener("click",fun)
    		t.removeEventListener("click",fun)
    		rohit+=1
    		console.log(rohit)
    		if(rohit==parseInt(array.length/2)){
    			virat.innerHTML=" "
    			var x = document.createElement("div");
 	            x.setAttribute("class","sharma")
    			x.innerHTML="Congrats !!!";
 	        	virat.appendChild(x)
 				
    			var y = document.createElement("div");
 	            y.setAttribute("class","kohli")
 	        	y.innerHTML="Your Score is "+ parseInt(array.length*1000/count)+" / 1000";
 				virat.appendChild(y)
 				document.getElementById("asdw").innerHTML=""

    		}

    		imgsel=[]
    	    imgid=[]
    	}
    }
    else{
    	    var s=document.getElementById(imgid[0])
    		var t=document.getElementById(imgid[1])
    		s.src="image.jfif"
    		t.src="image.jfif"
    		imgsel=[]
    	    imgid=[]
    }
 }

}

}
}
else {
	var str=document.getElementById("asd").value
document.getElementById("scores").innerHTML=" ";
var arrays=[
 {
 	name: "image1",
 	src: "image1.jfif"
 },
 {
 	name: "image1",
 	src: "image1.jfif"
 },
 {
 	name: "image2",
 	src: "image2.jfif"
 },
 {
 	name: "image2",
 	src: "image2.jfif"
 },
  {
 	name: "image3",
 	src: "image3.jfif"
 },
 {
 	name: "image3",
 	src: "image3.jfif"
 },
  {
 	name: "image4",
 	src: "image4.jfif"
 },
 {
 	name: "image4",
 	src: "image4.jfif"
 },
  {
 	name: "image5",
 	src: "image5.jfif"
 },
 {
 	name: "image5",
 	src: "image5.jfif"
 },
  {
 	name: "image6",
 	src: "image6.jfif"
 },
 {
 	name: "image6",
 	src: "image6.jfif"
 },
  {
 	name: "image7",
 	src: "image7.jfif"
 },
 {
 	name: "image7",
 	src: "image7.jfif"
 },
   {
 	name: "image8",
 	src: "image8.jfif"
 },
 {
 	name: "image8",
 	src: "image8.jfif"
 },
]
var array
var time
var virat= document.querySelector("div")
if(str=="2 * 3"){
    array=arrays.slice(0,6)
    console.log(array)
    time=350
    virat.classList.add("grid1")

}else if(str=="3 * 4"){
    array=arrays.slice(0,12)
    time=500
    virat.classList.add("grid3")
    console.log(array)
}else{
    array=arrays
    time=600
    virat.classList.add("grid2")
    console.log(array)
}

imgsel=[]
imgid=[]
console.log(array)
array.sort(()=> {return .5 - Math.random()})
let p=document.querySelector("div")

for(let i=0;i<array.length;i++){
 	var x = document.createElement("img");
 	x.setAttribute("src","image.jfif")
 	x.setAttribute("id",i)
 	x.addEventListener("click",fun)
 	x.classList.add("im1")
 	p.appendChild(x)
 }
var count=0
function fun(){
	pq=this.getAttribute("id")
    flip=array[pq].src
    this.src=flip;
    imgsel.push(flip)
    imgid.push(pq)
    count+=1
    if(imgsel.length==2){
    	setTimeout(check,time)   	
    }
}
var rohit=0
function check(){
	if(imgsel[0]==imgsel[1]){
    		if(imgid[0]==imgid[1]){
    			alert("Same Element was Clicked Twice")
    		var t=document.getElementById(imgid[1])
    		t.src="image.jfif"
    		imgsel=[]
    	    imgid=[]
    		}
    		else{
    		var s=document.getElementById(imgid[0])
    		var t=document.getElementById(imgid[1])
    		s.src="blank.jfif"
    		t.src="blank.jfif"
    		s.removeEventListener("click",fun)
    		t.removeEventListener("click",fun)
    		rohit+=1
    		console.log(rohit)
    		if(rohit==parseInt(array.length/2)){
    			virat.innerHTML=" "
    			var x = document.createElement("div");
 	            x.setAttribute("class","sharma")
    			x.innerHTML="Congrats !!!";
 	        	virat.appendChild(x)
 				
    			var y = document.createElement("div");
 	            y.setAttribute("class","kohli")
 	        	y.innerHTML="Your Score is "+ parseInt(array.length*1000/count)+" / 1000";
 				virat.appendChild(y)
 				document.getElementById("asdw").innerHTML=""

    		}

    		imgsel=[]
    	    imgid=[]
    	}
    }
    else{
    	    var s=document.getElementById(imgid[0])
    		var t=document.getElementById(imgid[1])
    		s.src="image.jfif"
    		t.src="image.jfif"
    		imgsel=[]
    	    imgid=[]
    }
 }

}
