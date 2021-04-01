
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductDetails from './components/productDetails';
import Home from './components/home';
import Distillate from './components/distillate';
import FullSpectrum from './components/fullSpectrum';

function App() {

  let fullSpectrumProducts = [
    {
      name: "Strawberry Lemonade",
      description: "Sativa"
    },
    {
      name: "Strawberry Lemonade",
      description: "Sativa"
    },
    {
      name: "Strawberry Lemonade",
      description: "Sativa"
    },
    {
      name: "Strawberry Lemonade",
      description: "Sativa"
    }
  ]

  let distillateProducts = [
    {
      name: "Strawberry Lemonade",
      description: "Sativa"
    },
    {
      name: "Strawberry Lemonade",
      description: "Sativa"
    },
    {
      name: "Strawberry Lemonade",
      description: "Sativa"
    },
    {
      name: "Strawberry Lemonade",
      description: "Sativa"
    }
  ]


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Distillate" exact render={(props) => <Distillate products={distillateProducts}/> }/>
          <Route path="/Full-Spectrum" exact render={(props) => <FullSpectrum products={fullSpectrumProducts}/> }/>
            

          {/* Create dynamic routes */}
          {/* {products.map(product => (
            <Route path={`/${product.name}`} exact render={(props) => <ProductDetails {...props} products={product} />}/>
          ))} */}


  
          {distillateProducts.map(product => (
            <Route
            path={`/Distillate/${product.name}`}
            render={(props) => <ProductDetails products={product} />}
          />
          ))}

          
          {fullSpectrumProducts.map(product => (
            <Route
            path={`/Full-Spectrum/${product.name}`}
            render={(props) => <ProductDetails products={product} />}
          />
          ))}
          

        </Switch>
            
      </div>
    </Router>
  );
}


export default App;
