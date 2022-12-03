
import { connect, useSelector } from 'react-redux';
import './App.css';
import TrelloActionButton from './component/TrelloActionButton';
import TrelloList from './component/TrelloList';


function App() {
  const lists = useSelector(state => state.lists);
 
  return (
    <div style={styles.listContainer}>
      
      {
        lists.map(list => (<TrelloList title={list.title} cards={list.cards} key={list.id} />))
      }
      <TrelloActionButton list />
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
