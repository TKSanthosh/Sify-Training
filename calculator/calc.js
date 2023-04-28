var firstparameter;
var secondparameter;
var actionType= "";

function add() {
    // var result = firstparameter + secondparameter;
    // return result;
}
function subtract() {
    // var result = firstparameter - secondparameter;
    // return result;
}
function display(value) {
    switch(actionType){
        case 'plus':
            secondparameter = secondparameter+value;
            break;

        case 'subtract':
            secondparameter = secondparameter-value;
            break;
        default:
            break;
    }

    firstparameter = firstparameter+value;
console.log(firstparameter)}
function onPlusclick() {
    actionType = 'plus';
}
function onSubtractclick() {
    actionType = 'subtract';
}