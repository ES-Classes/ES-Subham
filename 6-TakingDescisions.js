let x = 50;

if ( x < 50)
{
    let y = 89;
    console.log();
}
else if(x < 70)
{
    //some code
}
else
{


}

//Chaining and nesting

//console.log(y);

//switch
let currentTime = new Date("2020/4/5");
//console.log(currentTIme);
let day = currentTime.getDay();

switch(day)
{
    case 0:console.log("It's sunday");
    break;
    case 1:console.log("It's monnday");
    break;
    case 2:console.log("It's tuesday");
    break;
    case 3:console.log("It's wednesday");
    break;
    case 4:console.log("It's thursday");
    break;
    case 5:console.log("It's friday");
    break;
    default:console.log("It's saturday");
}