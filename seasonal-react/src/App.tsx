import { BrowserRouter as Router } from 'react-router-dom';
import { IconContext } from "@react-icons/all-files";
import AppRoutes from 'pages/AppRoutes';
import Nav from './components/layout/Nav';

function App() {
  return (
    <>
    <IconContext.Provider value={{ style: { position: 'relative', top:'-2px', display: 'inline-block'}}}>
      <Router>
        <Nav />
        <AppRoutes />
      </Router>
    </IconContext.Provider>
    </>
  );
}

export default App;
