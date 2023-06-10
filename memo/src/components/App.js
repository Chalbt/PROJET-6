import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Header from "./Header"
import Footer from "./Footer";
import Accueil from './Accueil';
import APropos from './APropos';


function App() {
  return (
    <div>
      <Header />
      {/*<Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>*/}
      <Footer />
    </div>   
  );
}

export default App;
