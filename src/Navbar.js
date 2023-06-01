import React from 'react'
// import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import AddNewTask from './AddNewTask';
import TaskVisualizer from './TaskVisualizer';
import AdminView from './AdminView';

//we are able to consider the linking phase over here
const Navbar = () => {
  return (
    <React.Fragment>
     {/* <BrowserRouter> */}

     <nav className="flex items-center justify-between flex-wrap bg-black p-6">

  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="font-semibold text-xl tracking-tight">Task Planner</span>
   </div>


    {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
    <NavLink
     className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}
     to="/ProductsView">Products View</NavLink>
    <NavLink
    className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}
     to="/OrdersView">Orders View</NavLink> */}
     {/* <NavLink
    className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}
     to="/AboutUs">About Us</NavLink> */}
     {/* <NavLink
     to="/AboutUs"
     className={"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}
     >About Us</NavLink>
    </div>
    </div> */}
       </nav>
    {/* we are defining the routes over here. */}
    <Routes>
    

    <Route path='/' element={<AdminView/>}></Route>
      <Route  path='/taskVisualizer'
      element={<TaskVisualizer/>}
      ></Route>
        <Route  path='/newTask' element={<AddNewTask/>}></Route>
      <Route path='/AboutUs' element={<About/>}></Route>

      {/* <Route path='/ErrorPage' element={<Error404/>}></Route> */}
    </Routes>
    {/* </BrowserRouter> */}
    </React.Fragment>
  )
}

export default Navbar;