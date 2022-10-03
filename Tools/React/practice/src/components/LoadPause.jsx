import React, {useState, useEffect, useCallback} from 'react'; 

function LoadPause(){
    var [progress, setProgress] = useState(0); //For the progress displaying on the bar
    var [loading, setLoading] = useState('off');


    var forward = () => {
        setProgress( state => {
            if(state === 100){
                
                alert("Maximum Reached")
                return 100;
            }
            else{
                return state + 10;
            }
        })
    }

    var backward = () => {
        setProgress( state => {
            if( state === 0){
                return 0;
            }
            else{
                return state - 10;
            }
        })
    }

    var loader = () => {
        if(loading === 'off'){
            setLoading('on')
        }
        else{
            return setLoading('off')
        }        
    }

    useEffect(()=>{
        let interval;
        if(loading === 'on'){
            interval = setInterval(()=>{
                setProgress(state => state+10);
            }, 1000);
        }
        else if(loading === 'off'){
            console.log('it is off')
            clearInterval(interval);
        }
        if(progress === 100){
            alert('Max reached');
            setProgress(100);
            setLoading('off');
        }
        return() => clearInterval(interval);
    },[loading, progress]);

    return(
        <div>
            <h1>My Progress Bar</h1>
            <div className='parent'>
                <div className='child' style={{width: `${progress}%`}}>
                        {progress}%
                </div>
            </div>
            <div className='buttons'>
                <button className='direction' onClick={backward}>Move Backward</button>
                <button className='direction' onClick={loader}>Loading/Paused</button>
                <button className='direction' onClick={forward}>Move Forward</button>
            </div>

        </div>
    )
}

export default LoadPause;