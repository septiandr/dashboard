import './App.css';
import Dashboard from './components/main/dashboard';
import SideBar from './components/sideBar/SideBar';
import MainRight from './components/right/MainRight';
function App() {

  return (
    <div className='flex flex-row'>
      <SideBar/>
      <Dashboard/>
      <MainRight/>
    </div>
  )
}

export default App
