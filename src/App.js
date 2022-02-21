import Search from "./components/Search";
import './components/components.css';
import ItemList from "./components/ItemList";
import { useEffect, useState } from "react";
function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const[userId,setUserId]=useState('');
  const[itemId,setItemId]=useState('');
  const[itemTitle,setItemTitle]=useState('');


  var itemToMap=items;
  if(itemTitle!=='') itemToMap=itemToMap.filter(todo=>todo.title.toLowerCase().includes(itemTitle.toLowerCase()));
  if(userId!=='') itemToMap=itemToMap.filter(todo=>todo.userId===Number(userId));
  if(itemId!=='') itemToMap=itemToMap.filter(todo=>todo.id===Number(itemId));
  
  return (
    <>
      <Search type={"User id"} searchValue={userId} setFunction={setUserId} />
      <Search type={"Id"} searchValue={itemId} setFunction={setItemId}/>
      <Search type={"Title"} searchValue={itemTitle} setFunction={setItemTitle} />
      <ItemList>
        {error && <p className="info">Error al cargar los datos </p>}
        {!isLoaded && <p className="info">Cargando</p>}
        {(isLoaded && itemToMap.length===0) &&<p className="info">No se encontró ninguna coincidencia</p>}
        
        {itemToMap.map(todo=>(
                  <li key={todo.id} className={`item ${todo.completed && 'item--completed'}`}>
                    <span className={`iconCheck ${todo.completed && 'iconCheck--active'}`}>√</span>
                    <p className="item-title">{todo.title}
                    <span className="item-title--id">User id: {todo.userId} <br/> Id: {todo.id}</span></p>                    
                  </li>))}
      </ItemList>
    </>
  );
}

export default App;
