const clock = document.getElementById('clock');
let date = new Date()

setInterval(()=>{ // This concept will be covered in events
    let date = new Date()
    // console.log(date.toLocaleString());
    clock.innerHTML=date.toLocaleTimeString()
},1000)