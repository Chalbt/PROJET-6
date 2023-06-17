import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Header from "./Header"
import Footer from "./Footer";
import Accueil from './Accueil';
import APropos from './APropos';
import Appartement from './Appartement';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/appartement/:id" element={<Appartement />} />
        </Routes>
        <Footer />
      </Router>
    </div>   
  );
}

export default App;
