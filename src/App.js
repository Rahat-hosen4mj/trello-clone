import { connect, useDispatch, useSelector } from "react-redux";
import "./App.css";
import TrelloActionButton from "./component/TrelloActionButton";
import TrelloList from "./component/TrelloList";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "./action";
import styled from "styled-components";



function App() {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const ListContainer = styled.div`
    display: flex;
    border: 1px solid red;
    
`

  const onDragEnd = (result) => {
    // todo reorderding logic
    // console.log(result)
    const { destination, source, draggableId } = result;
    // console.log(destination, source, droppableId)
    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h2>trello Clone</h2>
      
        <ListContainer>

          {lists.map((list) => (
            <TrelloList
              listId={list.id}
              title={list.title}
              cards={list.cards}
              key={list.id}
            />
          ))}
          <TrelloActionButton list />
       
          </ListContainer>
      </div>
    </DragDropContext>
  );
}

// const styles = {
//   listContainer:{
//     display: "flex",
//     flexDirection: "row"
//   }
// }

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
