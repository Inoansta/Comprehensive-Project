import React, {useState} from 'react'; 

function ProgressBar(){
    var [progress, setProgress] = useState(0); //For the progress displaying on the bar

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
                <button className='direction' onClick={forward}>Move Forward</button>
            </div>

        </div>
    )
}

export default ProgressBar;


// https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
