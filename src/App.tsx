




import {BrowserRouter,NavLink,Route} from 'react-router-dom'
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemsPage from './components/UserItemsPage';
import TodosItemsPage from './components/TodosItemsPage';

const App = () => {
   
  

    return (
      <BrowserRouter>
      <div>
          <div>
              <NavLink to='/users'>Пользователи</NavLink>
              <NavLink to='/todos' style={{marginLeft:10}}>Todos</NavLink>
          </div>
          <Route path='/users' exact>
        <UserPage/>
          </Route>
          <Route path='/todos' exact>
              <TodosPage/>
          </Route>
          <Route path='/users/:id'>
              <UserItemsPage/>
          </Route>
          <Route path='/todos/:id'>
              <TodosItemsPage/>
          </Route>
      </div>
      
      </BrowserRouter>
    );
};

export default App;