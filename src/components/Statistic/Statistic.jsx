import { StatisticButtonStyled } from "./StatisticButton.styled";
import { StatisticSectionStyled } from "./Statistic.styled";
import StatisticTable from "./StatisticTable";
import { ContainerStyled } from "components/common/commonComponents.styled";



export default function Statistic() {
    return (
        <>
            <StatisticSectionStyled>
                <ContainerStyled>
                    <StatisticButtonStyled>Month</StatisticButtonStyled>
                    <StatisticButtonStyled>Year</StatisticButtonStyled>
                    <StatisticTable />
                </ContainerStyled>
            </StatisticSectionStyled>
        </>

    );
}