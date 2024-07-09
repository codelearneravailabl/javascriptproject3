let form =document.querySelector("form")
console.log(form)
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let a =parseFloat(document.querySelector("#a").value)
    let b=parseFloat(document.querySelector("#b").value)
    let c =parseFloat(document.querySelector("#c").value)
    let d = (b*b - 4*a*c);
    
    let result =document.querySelector("#result")

    
    if(a ==="" ||b === "" || c===""||isNaN(a)||isNaN(b)||isNaN(c)){
        result.innerHTML=`enter valid number ${a},${b},${c}`
        console.log(`not a valid no ${a},${b},${c}`)

    } 
    
     else if((d > 0) ){
        let root1 =(((-b) + Math.sqrt(d))/(2*a))
        let root2 =(((-b) - Math.sqrt(d))/(2*a))
        
        console.log(" real roots, roots are not equal")
        result.innerHTML= `${root1} and ${root2}`
        console.log(result.innerHTML)

    } 
    else if(d === 0){
        let root = (-b/2*a)
        result.innerHTML=`${root} and ${root}`
        console.log(result.innerHTML)
    }
    else{
       result.innerHTML="roots are not real"
       console.log(d)
    }
    

})