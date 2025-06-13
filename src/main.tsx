import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import RootLayout from './components/layout/RootLayout/index.tsx'
import MainPage from './pages/mainPage/index.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RootLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </RootLayout>
  </BrowserRouter>
)
