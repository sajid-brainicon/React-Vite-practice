import Contactform from './components/Contactform.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';


const App = () => {
  let marks = 85;
  return (
    <div>
      <Header />
      {marks >= 90 ? (
        <h1>Excellent</h1>
      ) : marks >= 75 ? (
        <h1>Good</h1>
      ) : (
        <h1>Needs Improvement</h1>
      )}
      <Hero />
      <Contactform />
      <Footer />
    </div>
  );
};

export default App;