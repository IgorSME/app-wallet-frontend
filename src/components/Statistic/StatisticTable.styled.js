import styled from '@emotion/styled';

export const BaseTable = styled.table`
  width:280px;
  background-color: white;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border:0;
`;

export const THead = styled.thead`
font-family: ${p => p.theme.fonts.primary};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.m};
line-height: ${p => p.theme.lineHeights.normal};

`;

export const Td = styled.td`
border-bottom: 1px solid #DCDCDF;
font-family: ${p => p.theme.fonts.primary};
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.small};

`;

export const Th = styled.th`
margin-bottom: 29px;
background-color: grey;
font-weight: ${p => p.theme.fontWeights.bold};
border-radius: ${p => p.theme.radii.large};
`;

