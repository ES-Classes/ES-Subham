function printHello(name)
{
    console.log(`Hello! ${name}`);
}

function formatName(firstName,lastName)
{
    return `Hello! ${lastName},${firstName}`;
}

//Arrow functions

printHello(`Subham`);
let fullName = formatName('Subham','Rajbhandari');
console.log(fullName);



function factorial(n)
{
    if(n < 2)
    {
    return 1;
    }
    return n*factorial(n-1);

}


console.log(factorial(5));



