import './App.css';
import './components/AdviceDisplay';
import AdviceDisplay from './components/AdviceDisplay';
import FetchButton from './components/FetchButton';

function App() {
  return (
    <div>
    <AdviceDisplay/>
    <FetchButton>text</FetchButton>
    </div>

  );
}

export default App;
