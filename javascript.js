let valueInput = "";
let valueOutput = "";

let leftInput = "";
let rightInput = "";

let opInput = "";
var calculateInput = false;
var resetInput = false;

const screenInput = document.querySelector(".screen-input");
const screenOutput = document.querySelector(".screen-output");

const btns = document.querySelectorAll(".btn");
const clr = document.querySelector(".btn-clear");
const del = document.querySelector(".btn-delete");

btns.forEach(btn => 
{
    btn.addEventListener("click", () => 
    {
        Input(btn.textContent);
    });
});

clr.addEventListener("click", () => Clear());
del.addEventListener("click", () => Delete());

function Input(input)
{
    if (input == "=")
    {
        calculateInput = true;
    }
    else if (input == ".")
    {
        if (resetInput)
        {  
            leftInput = valueOutput;
            rightInput = "";
            opInput = "";
            valueOutput = "";
            resetInput = false;
        }

        if (rightInput != "")
        {
            if (HasDecimal(rightInput) == false)
            {
                rightInput += '.';
            }
        }
        else
        {
            if (leftInput != "")
            {
                if (HasDecimal(leftInput) == false)
                {
                    leftInput += '.';
                }
            }
        }
    }
    else if (input == "+" || input == "-" || input == "*" || input == "/")
    {
        if (resetInput)
        {  
            leftInput = valueOutput;
            rightInput = "";
            opInput = "";
            valueOutput = "";
            resetInput = false;
        }

        if (leftInput == "" || rightInput != "")
        {    
            return;
        }

        if (opInput == "")
        {
            opInput = input;
        }
        else
        {
            if (opInput != input)
            {
                opInput = input;
            }
        }
    }
    else
    {
        if (resetInput)
        {  
            leftInput = valueOutput;
            rightInput = "";
            opInput = "";
            valueOutput = "";
            resetInput = false;
        }

        if (leftInput == "")
        {
            leftInput += input;
        }
        else
        {
            if (opInput == "")
            {
                leftInput += input;
            }
            else
            {
                rightInput += input;
            }
        }
    }

    valueInput = leftInput + " " + opInput + " " + rightInput;

    if (calculateInput == true)
    {
        if (leftInput != "" && rightInput != "" & opInput != "")
        {
            valueInput += " =";
            valueOutput = Calculate(leftInput, rightInput, opInput);
            if (HasDecimal(valueOutput))
            {
               valueOutput =  Number(valueOutput).toFixed(2);
            }

            resetInput = true;
        }
        
        calculateInput = false;
    }

    Output();
}

function HasDecimal(value)
{
    var valueString = value.toString();

    if (valueString.includes('.'))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function Output()
{
    screenInput.textContent = valueInput;
    screenOutput.textContent = valueOutput;
}

function Clear()
{
    valueInput = "";
    valueOutput = "";
    leftInput = "";
    rightInput = "";
    opInput = "";

    Output();
}

function Delete()
{
    if (rightInput != "")
    {
        rightInput = "";
    }
    else if (opInput != "")
    {
        opInput = "";
    }
    else
    {
        if (leftInput != "")
        {
            leftInput = "";
        }
    }

    if (resetInput)
    {
        resetInput = false;
    }

    valueInput = leftInput + " " + opInput + " " + rightInput;
    valueOutput = "";

    Output();
}

function Calculate(a, b, op) 
{
    a = Number(a);
    b = Number(b);

    switch (op) 
    {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b === 0 ? 0 : a / b;
    }
}

Output();