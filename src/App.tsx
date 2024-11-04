import React from 'react';
import './App.css';
import TodoBoard from './component/TodoBoard'
import AppHeader from './component/AppHeader';

function App() {
  return (
    <div className="App flex justify-center h-[100vh]  ">
    <div className='bg-slate-500 lg:w-[600px] w-full  my-5 rounded-3xl p-5'>
      <AppHeader/>
      <TodoBoard/>
    </div>
      
    </div>
  );
}

export default App;
