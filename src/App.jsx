import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";

// here import the app.css
import './App.css'; 



function App(){


  return (

    <BrowserRouter>


      <div style={{display:"flex"}}>


       

        <Sidebar />



        

        <div 
          className="main-content"
          style={{
            flexGrow:1
          }}
        >


          {/* Navbar */}

          <Navbar />



          {/* Pages */}

          <Routes>


            <Route 
              path="/" 
              element={<Dashboard/>} 
            />


            <Route 
              path="/projects" 
              element={<Projects/>} 
            />


          </Routes>



        </div>



      </div>


    </BrowserRouter>

  )

}


export default App;