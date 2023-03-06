import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DevelopersScreen from './screens/DevelopersScreen';
import Layout from './components/Layout';
import IndexScreen from './screens/IndexScreen';
import { UserContextProvider } from './components/UserContext';
import CreatePostScreen from './screens/CreatePostScreen';
import SinglePostScreen from './screens/SinglePostScreen';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/developers" element={<DevelopersScreen />} />
          <Route path="/create" element={<CreatePostScreen />} />
          <Route path="/post/:id" element={<SinglePostScreen />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
