import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProductDetails from './components/productDetails';
import Home from './components/home';
import Distillate from './components/distillate';
import FullSpectrum from './components/fullSpectrum';
import Nav from './components/nav';
import About from './components/about';

import { Footer } from './components/footer';

import { AnimatePresence } from "framer-motion"


import fullSpectrumProducts from './components/fullSpectrumProducts';
import distillateProducts from './components/distillateProducts';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav/>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Distillate" exact render={(props) => <Distillate products={distillateProducts}/> }/>
            <Route path="/Full-Spectrum" exact render={(props) => <FullSpectrum products={fullSpectrumProducts}/> }/>
            <Route path="/About" exact component={About}/>
         

              

            {/* Rendering all Distillate Products */}

            {distillateProducts.map(product => (
              <Route
              path={`/Distillate/${product.name}`}
              render={(props) => <ProductDetails products={product} />}
            />
            ))}

            {/* Rendering all Full Spectrum Products */}

            {fullSpectrumProducts.map(product => (
              <Route
              path={`/Full-Spectrum/${product.name}`}
              render={(props) => <ProductDetails products={product} />}
            />
            ))}
            

          </Switch>
        </AnimatePresence>
        <Footer/>
          
      </div>
    </Router>

  );
}


export default App;
