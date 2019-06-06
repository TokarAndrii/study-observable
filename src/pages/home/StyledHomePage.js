import styled from 'styled-components';
import HomePage from './HomePage';

const StyledHomePage = styled(HomePage)`
width: 90vw;
.linksHolder{
    padding: 12px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
a{
    text-decoration: none;
    text-transform: uppercase;
}
`
export default StyledHomePage;