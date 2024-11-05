import { ChevronDown } from 'lucide-react';

function CheckedTodoList () {
    return (
        <div className=' flex items-center bg-secondary justify-between'>
        <h1 className=" font-gruppo  text-2xl text-black font-semibold px-4   ">
            Done</h1>
            <span className=' mr-1'><ChevronDown size={40}/></span>
        </div>
    )
    }
    
    export default CheckedTodoList;