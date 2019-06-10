import styled from 'styled-components';
import UserList from './UsersList';

const StyledUserList = styled(UserList)`
ul{
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

li{
    width: 96vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.userDetailsHeaderRow{
    border-bottom: 1px solid black;
    margin-bottom: 12px;
}

.userDetailsRow:hover{
    background-color: lightgrey;
    cursor: pointer;
}

.userDetails{
    margin-right: 12px;
    text-align: left;
    width: 200px;
    padding: 2px 0;
}

.actions{
    width: 300px;
}

.userDetailsID{
    margin-right: 12px;
    text-align: center;
    width: 50px;
    padding: 2px 0;
}

.userDetailsHeader{
    margin-right: 12px;
    text-align: left;
    width: 200px;
    padding-bottom: 6px;
    margin-bottom: 6px;
}

.userDetailsHeaderID{
    margin-right: 12px;
    text-align: center;
    width: 50px;
    padding-bottom: 6px;
    margin-bottom: 6px;
}

.userDetailsBtn{
    padding: 4px 12px;
    margin-right: 8px;
    text-align: center;
}

.userDetailsBtn:hover{
    outline: 1px solid blueviolet;
}

.link {
    color: black;
    text-transform: capitalize;
    text-align: center;
}

`

export default StyledUserList;