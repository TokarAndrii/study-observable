import styled from 'styled-components';
import SingleUserPage from './SingleUserPage';

const StyledSingleUserPage = styled(SingleUserPage)`
width: 96vw;
.linksHolder{
    padding: 12px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
a{
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 24px;
}
`;


export default StyledSingleUserPage;