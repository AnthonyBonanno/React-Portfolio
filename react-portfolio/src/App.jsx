// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <nav className="lead text-primary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-3">
        <Nav />
      </nav>
      
      <div className="p-3 text-primary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-3 flex-row space-between">
        <Outlet />
      </div>

      <div className="lead text-primary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-3">
        <Footer />
      </div>
    </>
  );
}

export default App;
