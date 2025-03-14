//your code here
let main=document.querySelector("main")
let classnamearray=["img1","img2","img3","img4","img5"]
let randomindex=Math.floor(Math.random()*classnamearray.length)
classnamearray.push(classnamearray[randomindex])

let h1=document.createElement("h1");
h1.innerText="I'm not a robot"
main.append(h1)

for(let t of classnamearray){
	let img=document.createElement("img")
	img.className=t
	main.append(img)
	img.addEventListener("click",verifyrobo)
}

let h3=document.createElement("h3")
h3.innerText="Please click on the identical tiles to verify that you are not a robot."
h3.id="h"
main.append(h3)

function verifyrobo(e){
let clickedimg=e.target;

	if(clickedimg.getAttribute("className")=="selected"){
		return;
	}
	clickedimg.classList.add("selected")
	
	if(!document.getElementById("reset")){
	let btn=document.createElement("button")
	btn.innerText="Reset"
	btn.id="reset"
	main.append(btn)
		btn.addEventListener("click",reset)
	}

	if(document.querySelectorAll(".selected").length==2){
	let btn=document.createElement("button")
	btn.innerText="Verify"
	btn.id="verify"
	main.append(btn)
		btn.addEventListener("click",verify);
	}

	if(document.querySelectorAll(".selected").length >2){
		let btn=document.getElementById("verify");
		btn.style.display="none";
	}

	function reset() {
		let selectedimage=document.querySelectorAll(".selected")

		for(let t of selectedimage){
			t.classList.remove("selected")
		}
		let resetbtn=document.getElementById("reset")
		resetbtn.remove();
		let verifybtn=document.getElementById("verify")
		verifybtn.remove();
		let para=document.getElementById("para")
		if(para){
			para.remove()
		}
			
		
	}
	function verify(e) {
		let para=document.createElement("p")
		para.id="para"
		 let selectedimg=document.querySelectorAll(".selected");
		if(selectedimg[0].classList[0]==selectedimg[1].classList[0]){
			para.innerText="You are a human. Congratulations!"
		}else{
			para.innerText="We can't verify you as a human. You selected the non-identical tiles."
		}
		main.append(para)
		e.target.remove()
	}
}
