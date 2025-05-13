
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServicii from './components/servicii';
import AppRecenzii from './components/recenzii';
import AppPreturi  from './components/preturi';
import AppContact from './components/contact.js';
import AppFooter from './components/footer.js';
function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader/>
      </header>

      <main>
        <AppHero/>
        <AppAbout/>
        <AppServicii/>
        <AppRecenzii/>
        <AppPreturi/>
        <AppContact/>
      </main>
      <footer id="footer">
        <AppFooter/>
      </footer>
    </div>
  );
}

export default App;
