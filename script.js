//your JS code here. If required.
let textInput=document.getElementById("text");
let delayInput=document.getElementById("delay");
let btn=document.getElementById("btn");

let output =document.createElement("div");
output.id="output";
output.style.marginTop="15px";
output.style.fontSize="19px";

document.body.appendChild(output);



function wait(ms) {
	return new Promise(resolve=>setTimeout(resolve,ms));
}

async function showMessage(){
	const message=textInput.value;
	const delay=Number(delayInput.value);
	output.textContent="Waiting...";

	await wait(delay);
	output.textContent=message;
}

btn.addEventListener("click",(e)=>{
	e.preventDefault();
	showMessage();
});