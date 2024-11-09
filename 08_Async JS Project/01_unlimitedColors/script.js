// const colors=["red", "green", "pink", "blue", "black"]

const randomColors = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++){
        index=Math.floor(Math.random()*16)
        color+=hex[index]
    }
    return color
}

// const randomValue = Math.floor(Math.random()*16)
let i=0;

const body = document.querySelector("body")
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop")
const changeColor = ()=>{
    body.style.backgroundColor=randomColors()
}
let changeColorInterval=null
startButton.addEventListener('click', (e)=>{
    if(!changeColorInterval){
        changeColorInterval=setInterval(changeColor, 2000)
    }
})

stopButton.addEventListener('click', (e)=>{
    if(changeColorInterval){
        clearInterval(changeColorInterval);
        changeColorInterval=null
    }
})


