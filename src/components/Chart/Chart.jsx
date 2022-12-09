import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { Wrapper, Text } from './Chart.styled';
import { transformNumber } from 'helpers';

ChartJS.register(ArcElement);

export function Chart({ dataDiagram, profit }) {
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
    <Wrapper>
      <Doughnut data={data} />
      <Text profit={profit}>₴ {transformNumber(profit)}</Text>
    </Wrapper>
  );
}
