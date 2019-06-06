import styled from 'styled-components';
import SingleUser from './SingleUser';

const StyledSingleUser = styled(SingleUser)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.userDetailsHolder{
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 32px;
}

span{
    font-weight: 700;
    display: inline-block;
    width: 100px;
    text-align: left;
    margin-right: 24px;
}
`;


export default StyledSingleUser;