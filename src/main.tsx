import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import App from './App.tsx'
import LeaveSeat from "./pages/leaveseat";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Leaveseat" element={<LeaveSeat />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
)
