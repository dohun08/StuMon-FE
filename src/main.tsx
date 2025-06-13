import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import RootLayout from './components/layout/RootLayout/index.tsx'
import MainPage from './pages/mainPage/index.tsx'
import Landing from "./pages/landing";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="main" element={<MainPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
