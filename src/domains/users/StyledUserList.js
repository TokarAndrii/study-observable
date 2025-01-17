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
    background-color: #DDD;
}

.userCreateLink {
    color: black;
    margin-top: 32px;
    padding: 10px 56px;
    border-radius: 5px;
    letter-spacing: 1px;
    text-align: center;
    text-transform: capitalize;
    background-color: #DDD;
    margin-left: 32px;
    box-shadow:  2px 2px rgba(0,0,0,0.5)
}

.userCreateLink:hover{
    background-color: grey;
    color: white;
}

.userDetailsBtn:hover{
    outline: 1px solid blueviolet;
}

.link {
    color: black;
    text-transform: capitalize;
    text-align: center;
    padding: 5px 12px;
    margin-right: 8px;
    text-align: center;
    border: 1px solid grey;
    background-color: #DDD;
    font: 400 13.3333px Arial;    
}

.link:hover{
    outline: 1px solid blueviolet;
}

`

export default StyledUserList;