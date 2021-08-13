
import './App.css';
import ShopItemFunc from './components/ShopItemFunc';
import Item from './components/User'

const item = new Item(
  'Tiger of Sweden', 
  'Leonard coat', 
  'Minimalistic coat in cotton-blend', 
  'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.', 
  399, 
  '£', 
  'img/item-black.jpg'
  )

export default function App() {
  return (
    <div className="container App">
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
  );
}
