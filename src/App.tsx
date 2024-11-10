import React from 'react';
import TodoBoard from './components/TodoBoard'
import AppHeader from './components/AppHeader';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App flex justify-center h-screen ">
    <main className='bg-primary   md:max-w-[600px] flex flex-col md:h-[90dvh] h-full w-full  border rounded-lg md:my-auto shadow-md'>
      <div className=' flex-shrink-0'>
      <AppHeader />
      </div>
      <div className='  flex-grow w-full overflow-auto rounded-b-lg '> <TodoBoard/></div>
      <footer className=" flex-shrink-0 sticky top-0 "> <AddTodo/></footer>
      
    </main>
      
    </div>
  );
}

export default App;
