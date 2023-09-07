// import logo from './logo.svg';
import './App.css';
import {AllRoutes} from './routes/AllRoutes'
import { BrowserRouter } from 'react-router-dom';
// import {Data} from '../src/Component/dataFetch'
function App() {
  return (
    <>
     {/* <Data/> */}
    <BrowserRouter>
       <AllRoutes/>
    </BrowserRouter>
    </>
  );
}
export default App;
