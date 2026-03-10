import {NavLink} from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow h-screen p-6">
      <h2 className="text-xl font-bold mb-8">
        FitTrack
      </h2>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/workouts"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Workouts
        </NavLink>

        <NavLink
          to="/nutrition"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Nutrition
        </NavLink>

        <NavLink
          to="/goals"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          Goals
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar