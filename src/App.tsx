import './App.css';
import { HashRouter, Route, Routes } from 'react-router';
import { Games } from './pages/Games';
import { ChatGame } from './components/ChatGame';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<div>Hello World</div>} />
        <Route path="games">
          <Route index element={<Games />} />
          <Route path="brouteur" element={<ChatGame />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
