import styled from 'styled-components';
import Input from './Input';

const StyledInput = styled(Input)`
margin-bottom: 24px;
width: 600px;
display: flex;
justify-content: space-between;

input {
    flex: 1 1 200px;
    padding: 8px;
}

span {
    flex: 0 1 150px;
    margin-right: 12px;
    font-weight: 700;
    text-align: left;
    padding: 8px;
}
`;


export default StyledInput;