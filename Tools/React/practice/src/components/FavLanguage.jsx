import React from "react";
import { useState } from "react";
import {LanguageContext} from '../App.jsx'

// class MainSection extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             index: 0,
//         }
//     }

//     toggle = () =>{
//         if(this.state.index === 0){
//             this.setState(
//                 {index: 1}
//                 )
//         }
//         else{
//             this.setState(
//                 {index: 0}
//                 )
//         }

//     }

//     render() {
//     return (
    // <div>
    //     <LanguageContext.Consumer>
    //         {language => {

    //             return(<p id='favoriteLanguage'>Favorite programming language: {language[this.state.index]}</p>)
    //         }
    //         }
    //     </LanguageContext.Consumer>
    //     <button id='changeFavorite' onClick={this.toggle}>Toggle language</button>
    // </div>
//     );
//     }
// }

function MainSection(){

    var [index, setIndex] = useState(0);
var toggle = () => {
    if(index === 0){
        setIndex(1);
    }
    else{
        setIndex(0);
    }
}

    return(
        <div>
        <LanguageContext.Consumer>
            {language => {

                return(<p id='favoriteLanguage'>Favorite programming language: {language[index]}</p>)
            }
            }
        </LanguageContext.Consumer>
        <button id='changeFavorite' onClick={toggle}>Toggle language</button>
    </div>
    )
}

export default MainSection;