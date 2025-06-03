import './App.css'
import {Routes, Route} from 'react-router-dom'
import FileComplaint from './components/FileComplaint'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/filecomplaint" element={<FileComplaint />} />  
      </Routes>
        
    </>
  )
}

export default App
