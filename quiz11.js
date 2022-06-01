function laugh(num){
    var risada = ""
    if (num > 0){
        for (var i = num; i > 0; i--){
            risada += "ha"
        }
        risada += "!"
        return risada

    }
}
console.log(laugh(3))