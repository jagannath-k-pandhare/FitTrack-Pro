import {useState} from "react"

function WorkoutDuration(){
    
    const [duration, setDuration] = useState(60)

    return(
        <div>
            <h3>Workout Duration</h3>

            <p>{duration} minutes</p>

            <button onClick={() => setDuration(duration + 10)}>
                Add 10 minutes
            </button>
        </div>
    )

}

export default WorkoutDuration