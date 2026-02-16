let value = 0;


function Add(number)
{
    value += number; 
    console.log(value);
}

function Multiply(number)
{
    value *= number;
    console.log(value);
}

function Subtract(number)
{
    value -= number;
    console.log(value);
}

function Divide(number)
{
    value /= number;
    console.log(value);
}


Add(2);
Multiply(6);
Subtract(2);
Divide(2);