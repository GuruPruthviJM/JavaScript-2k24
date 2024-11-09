const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((element)=>{
    console.log(element)
    element.addEventListener('click', (e)=>{ // This concept you will learn when events concept is covered
        console.log(e);
        console.log(e.target);
        body.style.backgroundColor=e.target.id;
    })
})

