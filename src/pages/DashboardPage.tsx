import { useWorkoutStats } from "../hooks/useWorkoutStats"


function DashboardPage(){
  const { totalWorkouts, totalVolume, personalRecord } = useWorkoutStats()

    return (
        <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <p>Welcome to FitTrack dashboard</p>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Total Workouts</h3>
          <p className="text-2xl font-bold">{totalWorkouts}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Total Volume</h3>
          <p className="text-2xl font-bold">{totalVolume} kg</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Personal Record</h3>
          <p className="text-2xl font-bold">{personalRecord} kg</p>
        </div>

      </div>
    </div>
    )
}
export default DashboardPage