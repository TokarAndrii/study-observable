import styled from 'styled-components';
import Error from './Error';

const StyledError = styled(Error)`
width: 80vw;
min-height: 200px;
display: flex;
justify-content: center;
align-items: center;
color: red;
font-weight: bold;
border: 1px solid black;
margin-top: 64px;
position: relative;

.closeErrorBtn{
position: absolute;
top: 10px;
right: 10px;
}

.closeErrorBtn:hover{
    background-color: grey;
    color: white;
}
`;

export default StyledError;