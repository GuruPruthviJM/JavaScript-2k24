const form = document.querySelector('form');
// don't use this method because it is going to select empty string
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e)=>{
    e.preventDefault() // It will not send the data to server
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    // console.log(typeof(height)) //--verfication
    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        // To show the result
        results.innerHTML=`<span>${bmi}</span>`
    }
})