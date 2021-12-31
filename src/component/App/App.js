import './_app.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Mainpage from '../Mainpage/Mainpage';
import Aboutpage from '../Aboutpage/Aboutpage';
import Servicepage from '../Servicepage/Servicepage';
import Workpage from '../Workpage/Workpage';
import Blog from '../Blog/Blog';
import Blogspage from '../Blogspage/Blogspage';
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
        <Route exact path='/about' component={Aboutpage} />
        <Route exact path='/services' component={Servicepage} />
        <Route exact path='/works' component={Workpage} />
        <Route exact path='/blogs/:id' component={Blog} />
        <Route exact path='/blogs' component={Blogspage} />
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
