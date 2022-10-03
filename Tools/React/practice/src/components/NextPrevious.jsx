import React, {useState} from "react";

function NextPrevious(){
    var [index, setIndex] = useState(0);
    const images = ["http://placekitten.com/g/600/400", "http://placekitten.com/600/400", "https://placebear.com/600/400", "https://placebear.com/g/600/400"];

    var next = () => {
        if(index < images.length - 1){
            setIndex(index => index+1)
        }
        else{
            setIndex(0);
        }

    }

    var previous = () => {
        if(index > 0){
            setIndex(index => index-1)
        }
        else{
            setIndex(images.length-1)
        }
    }




    return (
        <div>
            <button onClick={previous}>Previous</button>
            <img src={images[index]} alt=""/>
            <button onClick={next}>Next</button>
            
        </div> 
    )
}

export default NextPrevious;     