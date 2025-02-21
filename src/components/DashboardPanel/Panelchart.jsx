import { BarChart, Bar, XAxis, YAxis } from 'recharts';

// Custom bar shape component
const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      stroke='#222338'
      strokeWidth={"10"}
      fill={fill}
      rx={width / 2}
      ry={width / 2}
    />
  );
};

const Panelchart = () => {

  const data = [
    {
      name: 'Jan',
      a: 60,
      b: 20,
      c: 20,
    },
    {
      name: 'Feb',
      a: 70,
      b: 30,
      c: 40,
    },
    {
      name: 'Mar',
      a: 40,
      b: 20,
      c: 30,
    },
    {
      name: 'Apr',
      a: 50,
      b: 30,
      c: 20,
    },
    {
      name: 'May',
      a: 60,
      b: 20,
      c: 20,
    },
    {
      name: 'Jun',
      a: 40,
      b: 40,
      c: 20,
    },
    {
      name: 'July',
      a: 70,
      b: 30,
      c: 30,
    },
    {
      name: 'Aug',
      a: 60,
      b: 20,
      c: 20,
    },
    {
      name: 'Sep',
      a: 50,
      b: 30,
      c: 20,
    },
    {
      name: 'Oct',
      a: 30,
      b: 20,
      c: 30,
    },
    {
      name: 'Nov',
      a: 60,
      b: 20,
      c: 20,
    },
    {
      name: 'Dec',
      a: 40,
      b: 30,
      c: 30,
    },
  ];

  return (
    <BarChart
          width={1000}
          height={385}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis 
          dataKey="name" 
          axisLine={false}
          tickLine={false}
          />
          <YAxis
          domain={[20, 100]} 
          tickFormatter={(value) => `${value}%`}
          axisLine={false}
          tickLine={false}
          />
          <Bar dataKey="a" stackId="a" shape={CustomBar} fill="#56CCF2" barSize={18} />
          <Bar dataKey="b" stackId="a" shape={CustomBar} fill="rgba(255, 166, 0, 0.9)" barSize={18} />
          <Bar dataKey="c" stackId="a" shape={CustomBar} fill="rgba(255, 86, 48, 0.9)" barSize={18} />
        </BarChart>
  )
}

export default Panelchart;