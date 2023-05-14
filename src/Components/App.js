import "../style.css/style.css"
import React from 'react';
import Header from "./Header";
import Interface from "./Interface";
import Trends from "./Trends";
import Items from "./Items";
import Gridlist from "./Gridlist";
import Offers from "./Offers";
import Finisher from "./Finisher";
import Footer from "./Footer";
export default function App() { 
  return (
<div>
  <Header />   
  <Interface />
  <Trends />
  <Items />
  <Gridlist />
  <Offers />
  <Finisher />
  <Footer />
</div>
  )
}