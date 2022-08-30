import AppRoutes from 'pages/AppRoutes';
import Nav from './layout/Nav';
import { IconContext } from "@react-icons/all-files";

function App() {
  return (
    <>
    <IconContext.Provider value={{ style: { position: 'relative', top:'-2px', display: 'inline-block'}}}>
      <Nav />
      <AppRoutes />
    </IconContext.Provider>
    </>
  );
}

export default App;
