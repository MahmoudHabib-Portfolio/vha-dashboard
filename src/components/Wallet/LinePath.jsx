import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const LinePath = () => {

    const data = [
        {
          name: '3 July',
          uv: 76,
          pv: 43,
          amt: 63,
        },
        {
          name: '4 July',
          uv: 48,
          pv: 52,
          amt: 39,
        },
        {
          name: '5 July',
          uv: 39,
          pv: 43,
          amt: 41,
        },
        {
          name: '6 July',
          uv: 65,
          pv: 60,
          amt: 63,
        },
        {
          name: '8 July',
          uv: 46,
          pv: 36,
          amt: 40,
        }
      ];

  return (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis 
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ dy: 10 }}
          />
          <YAxis 
          tickFormatter={(value) => `$${value.toFixed("2")}`}
          axisLine={false}
          tickLine={false}
          tick={{ dx: -4 }}
          />
          <Line type="monotone" dataKey="uv" strokeWidth={4} stroke="#00F69E" />
        </LineChart>
  )
}

export default LinePath;