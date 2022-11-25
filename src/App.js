import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import HomePage from './pages/home/homepage';

function App() {
  return (
    <div>
        <Container>
            <HomePage/>
        </Container>
    </div>
  );
}

export default App;
