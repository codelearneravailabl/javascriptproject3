let form=document.querySelector("form")
console.log(form)
form.addEventListener("submit" ,(event)=>{
   event.preventDefault() ;
   let temperature=parseInt(document.querySelector("#temperature").value)
   console.log(temperature)
   let result=document.querySelector("#result")
   console.log(result)
   if(temperature ==="" || isNaN(temperature)){
    console.log(`Enter A valid Temperature ${temperature}`)
   } else{
    let temperature_in_f=((temperature*9/5)+32).toFixed(2)
    result.innerHTML=temperature_in_f
    console.log( temperature_in_f)

   }
})