import styled from 'styled-components';
import Button from './Button';

const StyledButton = styled(Button)`
    margin-top: 32px;
    padding: 12px 56px;
    border-radius: 5px;
    letter-spacing: 1px;
    text-align: center;

    :hover{
        background-color: grey;
        color: white;
    }
`

export default StyledButton;