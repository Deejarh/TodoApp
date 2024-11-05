import React from 'react';
import TodoBoard from './components/TodoBoard'
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="App flex justify-center h-[100vh]  ">
    <div className='bg-primary lg:w-[600px] w-full  lg:my-5 lg:rounded-3xl'>
      <AppHeader/>
      <TodoBoard/>
    </div>
      
    </div>
  );
}

export default App;
