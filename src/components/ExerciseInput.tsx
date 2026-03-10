type ExerciseInputProps = {
    value:string
    onChange: (value: string) => void
    onAdd:() => void
}
function ExerciseInput({value, onChange, onAdd}: ExerciseInputProps){
    return(
        <div className="flex gap-3 mb-4">
            <input 
                type="text"
                placeholder="Enter exercise"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) =>{
                    if (e.key === "Enter") onAdd()
                }}
                className="border p-2 rounded flex-2"
            />
            <button
                onClick={onAdd}
                disabled={!value.trim()}
                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
                Add
            </button>
        </div>
    )
}

export default ExerciseInput