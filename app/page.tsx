
// pages/index.tsx

import Footer from './components/Footer';
import Home from './components/Home';
import AboutPage from './pages/AboutPage';
import Experience from './pages/Experience';

const HomePage = () => {
  return (
    <>
      <Home/>
      <AboutPage/>
      <Experience/>
      <Footer/>
    </>
  );
};

export default HomePage;