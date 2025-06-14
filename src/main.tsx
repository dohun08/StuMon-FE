import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import RootLayout from './components/layout/RootLayout/index.tsx'
import MainPage from './pages/mainPage/index.tsx'
import LeaveSeat from "./pages/leave-seat";
import {LeaveSeatFormLocation} from "./pages/leave-seat/form/location";
import LeaveSeatFormTime from "./pages/leave-seat/form/time";
import LeaveSeatFormStudent from "./pages/leave-seat/form/student";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RootLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Leaveseat" element={<LeaveSeat />} />
        <Route path="/Leaveseat/form/location" element={<LeaveSeatFormLocation />} />
        <Route path="/Leaveseat/form/time" element={<LeaveSeatFormTime />} />
        <Route path="/Leaveseat/form/student" element={<LeaveSeatFormStudent />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </RootLayout>
  </BrowserRouter>
)
