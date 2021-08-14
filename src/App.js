import './App.css';
import ShopItemFunc from './components/ShopItemFunc';
import Item from './components/Item'

const item = new Item({
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend', 
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.', 
  price: 399, 
  currency: '£'
})

export default function App() {
  return (
    
      <ShopItemFunc item={item} />
    
  );
}