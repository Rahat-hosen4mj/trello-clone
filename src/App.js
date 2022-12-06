
import { connect, useSelector } from 'react-redux';
import './App.css';
import TrelloActionButton from './component/TrelloActionButton';
import TrelloList from './component/TrelloList';
import {DragDropContext} from 'react-beautiful-dnd'


function App() {
  const lists = useSelector(state => state.lists);
  
  const onDragEnd = () =>{
    // todo reorderding logic
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div>
    <h2>trello Clone</h2>
    <div style={styles.listContainer}>
      
      {
        lists.map(list => (<TrelloList listId={list.id} title={list.title} cards={list.cards} key={list.id} />))
      }
      <TrelloActionButton list />
    </div>
    </div>
    </DragDropContext>
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
