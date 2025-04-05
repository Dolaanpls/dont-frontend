import { HashRouter, Route, Routes } from 'react-router';
import { Games } from './pages/Games';
import { ChatGame } from './components/ChatGame';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<div>Hello World</div>} />
        <Route path="games" Component={Games}>
          <Route index element={<div></div>} />
          <Route path="chat" element={<ChatGame />} />
          <Route path="mail" element={<ChatGame />} />
          <Route path="social-media" element={<ChatGame />} />
          <Route path="tinder" element={<ChatGame />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
