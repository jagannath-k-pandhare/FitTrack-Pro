import { useWorkouts } from "../hooks/useWorkouts"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

function ProgressChart() {

  const { workouts } = useWorkouts()

  const data = workouts.map((w) => ({
    date: new Date(w.date).toLocaleDateString(),
    weight: w.weight
  }))

  if (data.length === 0) {
    return <p>No workout data yet.</p>
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">

      <h2 className="text-xl font-bold mb-4">
        Strength Progress
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="weight"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default ProgressChart