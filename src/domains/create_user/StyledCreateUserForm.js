import styled from 'styled-components';
import CreateUserForm from './CreateUserForm';

const StyledCreateUserForm = styled(CreateUserForm)`
width: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
.linksHolder{
    padding: 12px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

form {
    width: 800px;
}
`;


export default StyledCreateUserForm;