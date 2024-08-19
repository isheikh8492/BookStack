import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <BookList />
      <Footer />
    </div>
  );
}

export default App;
