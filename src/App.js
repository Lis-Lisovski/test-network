import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';
import Profile from './components/Profile/Profile';
import MyPosts from './components/Profile/MyPosts';

function App() {
  return (
    <div className="App">
      <Header />
      <Panel />
      <Profile firstName="Lis" secondName="Lisovski" />
      <Profile firstName="Andre" secondName="Streling" />
      <MyPosts />
      
      
    </div>
  );
}

export default App;
