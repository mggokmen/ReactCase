import logo from './logo.svg'
import './App.css'
import {Button} from 'react-bootstrap'
import Header from './Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddLead from './AddLead'
import ListLeads from './ListLeads'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1 className="testHead1">React Test Project</h1>
        <Routes>
        <Route path="/add" element={<AddLead/>} />
        <Route path="/list" element={<ListLeads/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
