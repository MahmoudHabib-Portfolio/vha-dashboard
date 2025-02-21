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
        fill={fill}
        rx={width / 2}
        ry={width / 2}
      />
    );
  };

const LastWChart = () => {

    const data = [
        {
          name: 'Bank Account',
          a: 85,
        },
        {
          name: 'VHA Token',
          b: 95
        },
        {
          name: 'Credit Card',
          c: 75
        },
    ];

  return (
    <BarChart
          width={425}
          height={225}
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
          hide={true}
          />
          <YAxis
          domain={[20, 100]} 
          tickFormatter={(value) => `${value}%`}
          axisLine={false}
          tickLine={false}
          hide={true}
          />
          <Bar dataKey="a" shape={CustomBar} fill="#15BFFD" barSize={35} />
          <Bar dataKey="b" shape={CustomBar} fill="#15BFFD" barSize={35} />
          <Bar dataKey="c" shape={CustomBar} fill="#15BFFD" barSize={35} />
        </BarChart>
  )
}

export default LastWChart;