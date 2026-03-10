import StatCard from "../components/StatCard"

function Dashboard() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6">
        Dashboard
      </h2>

      <div className="flex gap-6 flex-wrap">
        <StatCard title="Weight" value="74.6" unit="kg" />
        <StatCard title="Body Fat" value="21.7" unit="%" />
        <StatCard title="Workout Days" value="45" unit=""/>
      </div>
    </div>
  )
}

export default Dashboard