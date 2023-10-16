import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasePage from 'pages/BasePage';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<BasePage />}>
          <Route index element={<HomePage />}></Route>

          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
