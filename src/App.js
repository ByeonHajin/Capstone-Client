import './App.css';
import Post from './pages/Post';
import Main from './pages/Main';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Sign from './pages/Sign';
import Detail from './pages/Detail';
import Here from './pages/Here';
import Chat from './pages/Chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sign />} />
            <Route path="/main/detail" element={<Detail />} />
            <Route path="/main/*" element={<Main />} />
            <Route path="/post" element={<Post />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/here" element={<Here />} />
            <Route path="/chat" element={<Chat />}/>
        </Routes>
    </Router>
  );
}

export default App;
