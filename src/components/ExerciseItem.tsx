import {useState} from "react"

type ExerciseItemProps = {
    id: number
    name: string
    onRemove: (id:number) => void
    onUpdate:(id:number, name:string) => void
}

function ExerciseItem({id, name, onRemove, onUpdate} : ExerciseItemProps){

    const [isEditing, setIsEditing] = useState(false)
    const [editValue, setEditValue] = useState(name)

    const handleSave = () => {
    onUpdate(id, editValue)
    setIsEditing(false)
    }
    return (

        <li className="border p-3 rounded flex justify-between items-center">

  {isEditing ? (

    <input
      value={editValue}
      onChange={(e) => setEditValue(e.target.value)}
      className="border p-1 rounded flex-1 mr-3"
    />

  ) : (

    <span>{name}</span>

  )}

  <div className="flex gap-2">

    {isEditing ? (

      <button
        onClick={handleSave}
        className="text-green-600"
      >
        Save
      </button>

    ) : (

      <button
        onClick={() => setIsEditing(true)}
        className="text-blue-600"
      >
        Edit
      </button>

    )}

    <button
      onClick={() => onRemove(id)}
      className="text-red-500"
    >
      Remove
    </button>

  </div>

</li>

    //     <li className="border p-3 rounded flex justify-between item-center">
    //         {isEditing ? (
    //             <input value={editValue}
    //             onChange={(e) => setEditValue(e.target.value)}
    //             className="border p-1 rounded flex-1 mr-3"/> 
    //         ): (
    //             <span>{name}</span>
    //         )}
    //     <div className="flex gap-2">
    //         {isEditing ?(
    //         <button 
    //         onClick={handleSave}
    //         className="text-green-600"
    //         >
    //             Save
    //         </button>
    //         ): (

    //   <button
    //     onClick={() => setIsEditing(true)}
    //     className="text-blue-600"
    //   >
    //     Edit
    //   </button>
    // )}
    // <button
    //   onClick={() => onRemove(id)}
    //   className="text-red-500"
    // >
    //   Remove
    // </button>
    //     </div>

            
    //     </li>
    )
}
export default ExerciseItem