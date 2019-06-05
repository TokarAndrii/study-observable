import React from 'react';
import styled from 'styled-components';
import UserList from '../users/StyledUserList';


function App({ className }) {
  return (
    <div className={className}>
      <div className="App">
        <header className="App-header">
          <a className="App-link" href="https://www.npmjs.com/package/redux-observable"
            rel="noopener noreferrer" target="_blank">
            Redux-observable
          </a>
        </header>
        <main>
          <UserList></UserList>
        </main>
      </div>

    </div>
  );
}


const StyledApp = styled(App)`
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 4vmin;
  pointer-events: none;
}

.App-header {
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 0 32px;
}

.App-link {
  color: #61dafb;
  text-decoration: none;
}
`

export default StyledApp;
