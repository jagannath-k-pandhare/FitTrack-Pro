type StatCardProps = {
  title: string
  value: string
  unit: string
}

function StatCard({ title, value, unit }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition w-48">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>
      <p className="text-2xl font-bold mt-2">
        {value} {unit}
      </p>
    </div>
  )
}

export default StatCard