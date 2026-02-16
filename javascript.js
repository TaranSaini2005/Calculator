function Add(numberLeft, numberRight)
{
    console.log(numberLeft + numberRight);
}

function Multiply(numberLeft, numberRight)
{
    console.log(numberLeft * numberRight);
}

function Subtract(numberLeft, numberRight)
{
    console.log(numberLeft - numberRight);
}

function Divide(numberLeft, numberRight)
{
    console.log(numberLeft / numberRight);
}

function Operate(numberLeft, numberRight, operator)
{
    if (operator == "+")
    {
        Add(numberLeft, numberRight);
    }

    if (operator == "-")
    {
        Subtract(numberLeft, numberRight);
    }

    if (operator == "*")
    {
        Multiply(numberLeft, numberRight);
    }

    if (operator == "/")
    {
        Divide(numberLeft, numberRight);
    }

}

Operate(2,3,"+");
