let form =document.querySelector("form")
console.log(form)

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let number= parseInt(document.querySelector("#square").value)
    console.log(number)
    let result=document.querySelector("#result")
    if( number ==="" || isNaN(number)){
        result.innerHTML=`enter a valid number ${ number}`

    } else{
        let square = (number*number)
        result.innerHTML=square;
    }
    console.log(result)


})