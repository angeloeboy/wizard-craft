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
import { useState } from 'react';
import CheckCountry from './components/checkCountry';
import styled from 'styled-components';
import { useEffect } from 'react';
import { createBrowserHistory } from 'history';


import ReactGA from 'react-ga';

const Div = styled.div`
    overflow-x: hidden;
  box-sizing: border-box;
`

function App() {
  let [FnoOfProduct, FsetNoOfProduct] = useState(5);
  let [DnoOfProduct, DsetNoOfProduct] = useState(5);
  let [visited, setVisited] = useState(false);



  useEffect(() => {
    let storageVisited = window.localStorage.getItem('visited');

    if(storageVisited){
      setVisited(true)
    }
  }, []);


  useEffect(() => {
    ReactGA.initialize('UA-206850972-1');
    ReactGA.pageview(window.location.pathname);
  }, [])

  let setVisitedFunction = () => {
    window.localStorage.setItem('visited', 'true');
    setVisited(true)
  }

  return (
    <Router>
      <Div className="App">
        <Nav/>

        {!visited ? (
          <CheckCountry setVisited={setVisitedFunction}/>
        ):(
          <AnimatePresence exitBeforeEnter>

          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Distillate" exact render={(props) => <Distillate products={distillateProducts} noOfProduct={DnoOfProduct} setNoOfProduct={DsetNoOfProduct}/> }/>
            <Route path="/Full-Spectrum" exact render={(props) => <FullSpectrum products={fullSpectrumProducts} noOfProduct={FnoOfProduct} setNoOfProduct={FsetNoOfProduct}/> }/>
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
        )}

       
        <Footer/>
          
      </Div>
    </Router>

  );
}


export default App;
