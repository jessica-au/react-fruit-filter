//imports
import FruitContainer from './components/FruitContainer';
import Input from './components/Input'

function App() {
  const fruits =['lychee', 'mango', 'passionfruit', 'apple', 'longan', 'strawberry', 'blackberry', 'avocado']
  return (
    <div>
      <h1>Fruit Filter</h1>
      <FruitContainer fruits= {fruits} />
    </div>
  );
}

export default App;
