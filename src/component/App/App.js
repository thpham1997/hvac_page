import './_app.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Mainpage from '../Mainpage/Mainpage';
import Blog from '../Blog/Blog';
import Signin from '../Signin/Signin';
import Signout from '../Signout/Signout';
import Signup from '../Signup/Signup';
import Createblog from '../Createblog/Createblog';
import Footer from '../Footer/Footer';
import Notfound from '../Notfound/Notfound';
// import Test from '../Test/Test';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      {/* <Test /> */}
      <Switch>
        <Route exact path='/' component={Mainpage} />
        <Route path='/blogs/:id' component={Blog} />
        <Route exact path='/signin/' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/create/' component={Createblog} />
        <Route exact path='*' component={Notfound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
