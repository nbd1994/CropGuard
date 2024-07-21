import FormPage from "./FormPage"
import Navbar from "./components/ui/Navbar";
import './lib/bg.css'
import background from './assets/pexels-scottwebb-1048033.jpg'
function App() {
  return<div id="bg" className=" flex justify-center w-full md:pt-8 border-2 rounded-lg">
    <div className="bg-black flex justify-center fixed w-full h-8 top-0 z-50 text-white md:hidden">
    Chat
    </div>
    <Navbar />
    <FormPage />
  </div>
  

}

export default App
