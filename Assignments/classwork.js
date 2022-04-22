
function tip(n)
{
    if(n > 50 && n < 300)
    {
    return n * .10;
    }

    return n * .15;
}

let x = 250;
console.log(tip(x));


console.log('The bill was:',x,', The tip was:',tip(x),',The total was:',x+tip(x));

