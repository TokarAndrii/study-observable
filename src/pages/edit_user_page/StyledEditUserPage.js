import styled from 'styled-components';
import EditUserPage from './EditUserPage';

const StyledEditUserPage = styled(EditUserPage)`
width: 96vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.linksHolder{
    padding: 12px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
}
a{
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 24px;
}
`;

export default StyledEditUserPage;