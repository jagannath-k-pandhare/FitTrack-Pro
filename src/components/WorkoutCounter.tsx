import {useState} from "react"

function WorkoutCounter(){

    const [days, setDays] = useState<number>(45)

    return(
        <div>
            <h3>Workout Days</h3>

            <p>{days}</p>

            <button onClick={() => setDays(days + 1)}>
                [+ 1 Day]
            </button>


            <button onClick={() => setDays(days > 0 ? days -1 : 0)}>
                [- 1 Day]
            </button>

        </div>
    )
}
export default WorkoutCounter