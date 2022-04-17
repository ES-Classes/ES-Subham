function printHello(name)
{
    console.log(`Hello! ${name}`);
}

function formatName(firstName,lastName)
{
    return `${lastName},${firstName}`;
}

//Arrow functions

printHello(`Subham`);
let fullName = formatName('Subham','Rajbhandari');
console.log(fullName);

