
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
      description: "Sativa",
      feelings: [
        "Relaxed",
        "Happy",
        "Euphoric",
      ],
      details: "Original Glue (GG4), developed by GG Strains, is a potent hybrid strain that delivers heavy-handed euphoria and relaxation, leaving you feeling “glued” to the couch. Its chunky, resin-covered buds fill the room with pungent earthy and sour aromas inherited from its parent strains, Chem’s Sister, Sour Dubb, and Chocolate Diesel. Taking first place in both the Michigan and Los Angeles 2014 Cannabis Cups as well as the High Times Jamaican World Cup, this multiple award-winning hybrid's supremacy is no longer a secret, and consumers will search far and wide to get their hands sticky with Original Glue (GG4)."
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
      description: "Sativa",
      feelings: [
        "Relaxed",
        "Happy",
        "Euphoric",
      ],
      details: "Original Glue (GG4), developed by GG Strains, is a potent hybrid strain that delivers heavy-handed euphoria and relaxation, leaving you feeling “glued” to the couch. Its chunky, resin-covered buds fill the room with pungent earthy and sour aromas inherited from its parent strains, Chem’s Sister, Sour Dubb, and Chocolate Diesel. Taking first place in both the Michigan and Los Angeles 2014 Cannabis Cups as well as the High Times Jamaican World Cup, this multiple award-winning hybrid's supremacy is no longer a secret, and consumers will search far and wide to get their hands sticky with Original Glue (GG4)."
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
            
      </div>
    </Router>
  );
}


export default App;
