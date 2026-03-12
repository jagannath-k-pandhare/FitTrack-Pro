import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"

import DashboardPage from "./pages/DashboardPage"
import WorkoutsPage from "./pages/WorkoutsPage"
import NutritionPage from "./pages/NutritionPage"
import GoalsPage from "./pages/GoalsPage"
import WorkoutLogPage from "./pages/WorkoutLogPage"

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar/>
      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/workout-log" element={<WorkoutLogPage />}/>
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/goals" element={<GoalsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App