import BookList from './components/book/BookList';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import home from './components/home';
import BookDetail from './components/book/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>
        Library Catalog
      </h1>
      <Switch>
        <Route exact path='/' component={home} />
        <Route path='/books/:id' component={BookDetail} />
        <Route path='/books' component={BookList} />
      </Switch>
    </main>
  );
}

export default App;
