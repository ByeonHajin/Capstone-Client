import "./App.css";
import Post from "./pages/Post";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Detail from "./pages/Detail";
import Here from "./pages/Here";
import Chat from "./pages/Chat";
import MyMap from "./pages/MyMap";
import Neighbor from "./pages/Neighbor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sign />} />
            <Route path="/main/detail" element={<Detail />} />
            <Route path="/main/*" element={<Main />} />
            <Route path="/post" element={<Post />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/here" element={<Here />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/mymap" element={<MyMap />} />
            <Route path="/neighbor" element={<Neighbor />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
