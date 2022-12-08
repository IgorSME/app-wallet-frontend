import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from '@emotion/styled';

import { transformNumber } from 'helpers';

ChartJS.register(ArcElement);

export function Chart({ dataDiagram, sum }) {
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
      <Text sum={sum}>₴ {transformNumber(sum)}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;

const Text = styled.p`
  position: absolute;
  color: ${p => (p.sum > 0 ? p.theme.colors.income : p.theme.colors.expense)};

  /* font-family: ${p => p.theme.fonts.primary}; */
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 500ms ease 0s;
`;
