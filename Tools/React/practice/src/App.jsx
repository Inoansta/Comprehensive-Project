import React, {useState} from "react";

import ES5 from "./components/ES5.jsx";
import Index from "./components/Index.jsx";
import API from "./components/API.jsx";
import Calculator from "./components/Calculator.jsx";
import MainSection from "./components/FavLanguage.jsx";
import ProgressBar from './components/ProgressBar.jsx';
import LoadPause  from './components/LoadPause.jsx';
import NextPrevious from './components/NextPrevious.jsx';
import {PhoneBookForm, InformationTable} from './components/PhoneBook';
import './App.css';
export const LanguageContext = React.createContext();

function App() {
  // var [data, setData] = useState([]);
  // const language = ['JavaScript', 'Python'];
  var name = 'world'
  return (
    <div className="App">
      {/* <ES5 name={name}/> */}
      {/* <Index /> */}
      {/* <API /> */}
      {/* <Calculator /> */}
      {/* <LanguageContext.Provider value={language}>
        <MainSection />
      </LanguageContext.Provider> */}
      {/* <PhoneBookForm setData={setData}/>
      <InformationTable parentProps={data}/> */}
      {/* <NextPrevious /> */}
      {/* <LoadPause /> */}
      {/* <ProgressBar /> */}
    
    </div>
  );
}

export default App;
