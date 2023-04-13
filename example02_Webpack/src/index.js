import jq from "jquery" //Using ES6 syntax, import JQuery


//Importing styles, in webpack, is a modular process that can be imported and used using ES6 import syntax.
import './css/index.css'

//Referencing less files
import './css/index.less'

//import picture
import head_portrait from './images/head_portrait.jpg'

//Assign a value to the image property in index
jq('.image-box').attr('src', head_portrait)

//Define JQuery's entry point function
jq(function() {
    //Implement different colors for odd and even rows
    //Odd numbers are yellow
    //Even numbers are blue
    jq('li:odd').css('background-color', 'blue')
    jq('li:even').css('background-color', ' red')
})



//Testing advanced js syntax
//Define decorator functions
function test(parameter) {
    parameter.test = "just test"
}

//Defining a class
@test
class testclass {} //This is not an error but a warning

console.log(testclass.test)