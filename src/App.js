import './App.css';
import Logo from './components/Logo';
import OptionsHeader from './components/OptionsHeader';
import IconsHeader from './components/IconsHeader';



function App() {
  return (
    <div className='App'>
      <header className='App-header'>
          <Logo></Logo>
          <OptionsHeader></OptionsHeader>
          <IconsHeader></IconsHeader>
      </header>
    </div>
  );
}

export default App;
