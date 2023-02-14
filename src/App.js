import './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Todos from './components/todos/Todos';
import Settings from './components/settings/Settings';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
