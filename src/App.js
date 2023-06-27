import './App.css';
import './styles.css';

import Introduction from './Components/Introduction';
import UseStateHook from './Components/UseStateHook';
import UseReducerHook from './Components/UseReduserHook'
import UseEffectHook from './Components/UseEffectHook';
import UseRefHook from './Components/UseRefHook';
import UseLayoutEffectHook from './Components/UseLayoutEffectHook';
import ImparativeHandleHook from './Components/ImperativeHandleHook/ImperativeHandleHook';
import CreateContextHook from './Components/CreateContextHook/CreateContextHook';
import UseMemoHook from './Components/UseMemoHook';
import UseCallBackHook from './Components/UseCallBackHook/UseCallBackHook';

import Navbar from './Navbar/Navbar';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Introduction />}/>
          <Route path="/usestate" element={<UseStateHook />}/>
          <Route path="/usereducer" element={<UseReducerHook />}/>
          <Route path="/useeffect" element={<UseEffectHook />}/>
          <Route path="/useref" element={<UseRefHook />}/>
          <Route path="/uselayouteffect" element={<UseLayoutEffectHook />}/>
          <Route path="/imparativehandle" element={<ImparativeHandleHook />}/>
          <Route path="/createcontext" element={<CreateContextHook />}/>
          <Route path="/usememo" element={<UseMemoHook />}/>
          <Route path="/usecallback" element={<UseCallBackHook />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;