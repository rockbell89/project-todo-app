import './App.module.scss';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Todos from './components/todos/Todos';
import Settings from './components/settings/Settings';

function App() {
  const [isShowCreateModal, setIsShowCreateModal] = useState(false);

  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  const handleShowCreateModal = () => {
    setIsShowCreateModal((prevState) => !prevState);
  };

  useEffect(() => {
    setScreenSize();
  });

  return (
    <MainLayout onClickCreateModal={handleShowCreateModal}>
      <Routes>
        <Route
          path="/"
          element={
            <Todos
              isShowCreateModal={isShowCreateModal}
              onClickCreateModal={handleShowCreateModal}
            />
          }
        />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
