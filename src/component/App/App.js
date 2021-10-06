import './_app.scss'
import Mainpage from '../Mainpage/Mainpage';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
function App() {
  return (
      <div>
        <Navbar/>
        <Mainpage/>
        <Footer/>
      </div>
  );
}

export default App;
