let a = prompt("enter 1st number");
let b  = prompt("enter 2nd number");

let c = prompt("enter operator");

switch(c){
    case "+":
        var res = parseFloat(a)+parseFloat(b);
        console.log(`${a}+${b}=${res}`);
        break;
        case "-":
            var res = parseFloat(a)-parseFloat(b);
            console.log(`${a}-${b}=${res}`);
            break;
            case "*":
                var res = parseFloat(a)*parseFloat(b);
                console.log(`${a}*${b}=${res}`);
                break;
                case "/":
                    var res = parseFloat(a)/parseFloat(b);
                    console.log(`${a}/${b}=${res}`);
                    break;   
    default:
        console.log("invalid operator");
}