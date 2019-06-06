import App from './App';
import styled from 'styled-components';

const StyledApp = styled(App)`
.App {
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  width: 98vw;
}

.App-link {
  color: #61dafb;
  text-decoration: none;
}
`

export default StyledApp;