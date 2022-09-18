import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav'
import About from './Component/About';
import Search from './Component/searchbar';
import Cocktail from './Component/cocktail';
import {ItemProvider} from './Component/Context/ItemProvider'
import {HashRouter,Routes,Route} from 'react-router-dom' 
import SingleComponent from './Component/SingleComponent';

function App() {
  return (
    <ItemProvider>
    <HashRouter >
       <Nav></Nav>
      {/* <SingleComponent></SingleComponent> */}
       <Routes>
            <Route path="/" element={<Cocktail></Cocktail>}></Route>
           <Route path="/about" element={<About></About>}>
           </Route>
           <Route path="/cocktail/:id" element={<SingleComponent></SingleComponent>}></Route>
       </Routes>


    </HashRouter>
    </ItemProvider>
  );
}

export default App;
