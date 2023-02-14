/*
 * @Description: 
 * @Author: Xinyue Cao
 * @Date: 2023-02-14 04:59:08
 * @LastEditTime: 2023-02-14 14:02:37
 * @LastEditors: Xinyue Cao
 */
let pw = ""
let r = 0
let pw1El = document.getElementById("pw1")
let pw2El = document.getElementById("pw2")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const pwLength = 15



function generate() {
    pw = ""
    for(let i=0;i<pwLength;++i){
        r = Math.floor(Math.random()*characters.length)
        pw+=characters[r]
    }
    return pw
}

function render() {
    pw1El.textContent = generate()
    pw2El.textContent = generate()
    console.log('1')
}

// function copy(id){
//     let button = document.getElementById(id)
//     button.select()
//     document.execCommand("copy")
//     alert("Copied")
// }