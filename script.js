document.querySelector(".btnClass").addEventListener("click", function binToDec() { 
    var total = 0; count = 1; binary = document.querySelector(".binClass").value
    if(binary.match(/^[0-1]+$/g) === null || binary.match(/^[0-1]+$/g) === null) {
        document.querySelector(".warning").innerHTML = `Enter only 0 or 1!`
    }
    else {
        for(i = 0; i < binary.length; i++) {
            total += Number(binary[i]) * 2 ** (binary.length - count)
            count++
        }
        document.querySelector(".decClass").value = total
        document.querySelector(".warning").innerHTML = ""
    }
})