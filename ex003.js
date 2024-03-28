function palindromo(str){
    let transform = str.split("").reverse()
    let join = transform.join("")
    if(str == join){
        return true
    }else{
        return false
    }
}


console.log(palindromo('arara'))
console.log(palindromo('esse'))
console.log(palindromo('hello'))
