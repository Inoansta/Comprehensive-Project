import React, {useState} from "react";

function Calculator(){
    var [onscreen, setOnscreen] = useState('');
    var [result, setResult] = useState('');

    var clicked = (e) => {
        if(result !== ''){
            setResult('');
            setOnscreen('');
        }
        setOnscreen(onscreen => onscreen += e.target.value);
    }

    var calculation = () => {
        var typed = [...onscreen];
        var numbers = new Set(['1', '2', '3']);
        var operators = new Set(['+', '-']);

        var temp = 0;
        var num = '';
        var ope = '';
        for(let i=0; i<typed.length; i++){
            if(ope === ''){
                if(numbers.has(typed[i]))
                    {
                        num += typed[i];
                    }
                else if(operators.has(typed[i])){
                    ope = typed[i];
                    temp = Number(num);
                    num = '';
                }
            }
            else{
                if(numbers.has(typed[i]))
                    {
                        num += typed[i];
                    }
                else if(operators.has(typed[i])){
                    if(ope === '+'){
                        temp += Number(num);
                    }
                    else if (ope === '-'){
                        temp -= Number(num);
                    }
                    num = '';
                    ope = typed[i];
                }
            }

        }
        if(ope === '+'){
            temp += Number(num);
        }
        else if(ope === '-'){
            temp -= Number(num);
        }

        setResult(temp);
        setOnscreen(temp);

    }

    
    return(
        <div>
            <h1 style={{textDecorationLine: 'underline'}}>Simple Calculator</h1>
            <br/>
            <div className="wrapper">
                <div className="screen">{onscreen}</div>
                <div className="buttonbox">
                    <button className="input" value="1" onClick={clicked}>1</button>
                    <button className="input" value="2" onClick={clicked}>2</button>
                    <button className="input" value="3" onClick={clicked}>3</button>
                    <button className="input" value="+" onClick={clicked}>+</button>
                    <button className="input" value="-" onClick={clicked}>-</button>
                    <button className="input" value="=" onClick={calculation}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;