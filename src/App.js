import { connect, useDispatch, useSelector } from "react-redux";
import "./App.css";
import TrelloActionButton from "./component/TrelloActionButton";
import TrelloList from "./component/TrelloList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "./action";
import styled from "styled-components";



function App() {
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const ListContainer = styled.div`
    display: flex;
    padding: 0px 10px;
    
`

  const onDragEnd = (result) => {
    // todo reorderding logic
    // console.log(result)
    const { destination, source, draggableId, index } = result;
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
        draggableId,
        index
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h2>trello Clone</h2>
        {/* <Droppable droppableId="all-list" direction="horizontal" type="list"> */}
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {
            provided => (
              <ListContainer {...provided.droppableProps} ref={provided.innerRef}>

              {lists.map((list, index) => (
                <TrelloList
                  listId={list.id}
                  title={list.title}
                  cards={list.cards}
                  key={list.id}
                  index={index}
                />
              ))}
              <TrelloActionButton list />
           
              </ListContainer>
            )
          }
       
          </Droppable>
          {/* </Droppable> */}
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
