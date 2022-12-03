
import { connect, useSelector } from 'react-redux';
import './App.css';
import TrelloList from './component/TrelloList';


function App() {
  const lists = useSelector(state => state.lists);
 
  return (
    <div style={styles.listContainer}>
      
      {
        lists.map(list => (<TrelloList title={list.title} cards={list.cards} key={list.id} />))
      }
      
    </div>
  );
};


const styles = {
  listContainer:{
    display: 'flex',
    flexDirection: "row"
  }
}

const mapStateToProps = state =>({
  lists: state.lists
});


export default connect(mapStateToProps) (App);
