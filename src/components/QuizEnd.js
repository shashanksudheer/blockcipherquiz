import styled from 'styled-components'
import {Button} from './Button'

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const QuizEnd = ({pts}) => {

    const refreshPage = () => window.location.reload();

    // Find the top 3 highest scoring ciphers based on the answers
    
    let sortable = []
    for (var cipher in pts) {
        sortable.push([cipher, pts[cipher]]);
    }

    sortable.sort((a, b) => {
        return b[1] - a[1];
    });

    return (
        <>
            <Title>The 3 best block cipher choices for you are:</Title>
            <Points>1: {sortable[0][0]}</Points>
            <Points>2: {sortable[1][0]}</Points>
            <Points>3: {sortable[2][0]}</Points>

            <Button onClick={refreshPage}>Retry</Button>
        </>
    )
}

export default QuizEnd
