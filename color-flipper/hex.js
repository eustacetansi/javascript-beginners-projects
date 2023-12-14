const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let hex = [0, 1, 2 , 3, 4, 5, 6, 7, 8 ,9, "A", "B", "C", "D", "E", "F"]

btn.addEventListener('click', () => {
    newHex = "#";

    for(let i=0; i<6; i++){
        newHex += hex[getRandomNumber()];
    }
    color.textContent = newHex;
    document.body.style.backgroundColor = newHex;
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}
