import React from 'react'
import { Line } from 'react-chartjs-2'

const Chart = ({ history }) => {
  const lineChart = history ? (
    <Line
      data={{
        labels: history.map(({ timestamp }) => timestamp),
        datasets: [
          {
            data: history.map((data) => data.price),
            label: 'Price',
            backgroundColor: '#3333ff',
            fill: true,
          },
        ],
      }}
    />
  ) : null
  return <div>{lineChart}</div>
}

export default Chart
