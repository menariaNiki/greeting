
const Greetme = document.getElementById('Greetme')
const Greeting = document.getElementById('Greeting')
const nameInput = document.getElementById('name')

Greetme.addEventListener("click",()=>{
    const username = nameInput.value.trim()
    if (username!= ""){
        Greeting.textContent = `HELLO , ${username}`
    }
});


const boxes = document.querySelectorAll(".box")


for (let i = 0; i<boxes.length;i++){
    boxes[i].onclick = ()=>{
        boxes[i].style.backgroundColor = 
        boxes[i].innerText.toLowerCase();
    };
}
