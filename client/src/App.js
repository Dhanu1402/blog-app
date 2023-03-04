import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DevelopersScreen from './screens/DevelopersScreen';
import Layout from './components/Layout';
import IndexScreen from './screens/IndexScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/developers" element={<DevelopersScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
