import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);

export function Chart({ dataDiagram }) {
  const data = {
    labels: [],
    datasets: [
      {
        data: dataDiagram.map(el => el.totalSum),
        backgroundColor: dataDiagram.map(el => el.color),

        borderWidth: 0,
        // hoverOffset: 4,
        cutout: '70%',
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
}
