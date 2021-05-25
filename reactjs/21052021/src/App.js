
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';

var App=()=> {
  return (
    <Router>
        <section>
     <Header menudata="Home" />
      <Slider/>  
     
 <switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/services" component={Services}/>
   <Route exact path="/contact" component={Contact}/>
 </switch>
      <Footer/> 
   </section>
    </Router>
 
  );
}

export default App;
