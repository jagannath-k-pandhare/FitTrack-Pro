import WorkoutForm from "../components/WorkoutForm"
import WorkoutList from "../components/WorkoutList"
import ProgressChart from "../components/ProgressChart"

function WorkoutLogPage() {
  return (
    <div>
      <WorkoutForm />
      <WorkoutList />
      <ProgressChart />
    </div>
  )
}

export default WorkoutLogPage