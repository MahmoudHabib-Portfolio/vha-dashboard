import { PieChart, Pie, Cell } from 'recharts';

const PieDart = () => {

  const data = [
    { name: '', value: 65 },
    { name: '', value: 60 },
    { name: '', value: 35 },
    { name: '', value: 375 }
  ];

  const COLORS = ["#002D67", "#00DCF9", "#1866CD", "#4D91FF"];

  return (
    <>
      <PieChart width={175} height={175}>
        <Pie
          data={data}
          cx={80}
          cy={80}
          innerRadius={55}
          outerRadius={80}
          fill="#8884d8"
          stroke='0'
          paddingAngle={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  )
}

export default PieDart;