import type { Workout } from "../types/workout"


// let workouts: Workout[] = []

// export async function fetchWorkouts(): Promise<Workout[]>{
//     // return [...workouts]
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([...workouts])
//         })
//     })
// }

// export async function addWorkout(workout: Workout): Promise<Workout>{
//     workouts.push(workout)
//     return workout
// }

// export async function updateWorkout(workout: Workout) : Promise<Workout>{
//     workouts = workouts.map((w) => 
//         w.id === workout.id ? workout: w
//     )
//     return workout
// }

// export async function deleteWorkout(id: number) : Promise<number>{
//     workouts = workouts.filter((w) => 
//         w.id !== id
// )
//     return id
// }

const STORAGE_KEY = "workouts"

function loadWorkouts(): Workout[]{
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) :[]
}

function saveWorkouts(data: Workout[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

let workouts: Workout[] = loadWorkouts()

export async function fetchWorkouts(): Promise<Workout[]>{
    return [...workouts]
}

export async function addWorkout(workout: Workout): Promise<Workout>{
    workouts.push(workout)
    saveWorkouts(workouts)
    return workout
}

export async function updateWorkout(workout: Workout): Promise<Workout>{
    workouts = workouts.map(w => w.id === workout.id ? workout : w)
    saveWorkouts(workouts)
    return workout
}

export async function deleteWorkout(id: number): Promise<number>{
workouts = workouts.filter(w => w.id !== id)
    saveWorkouts(workouts)
    return id
}
