import React from "react";
import TrelloActionButton from "./TrelloActionButton";
import TrelloCard from "./TrelloCard";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListContainer = styled.div`
background-color: #dfe3e6;
border-radius: 3px;
width: 300px;
height: 100%;
padding: 8px;
margin-right: 10px;
`

const TrelloList = ({ title, cards, listId, index}) => {
  //  console.log('list id', listId)
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {provided => (
         <ListContainer {...provided.draggableProps}
         {...provided.dragHandleProps} 
         ref={provided.innerRef}>
          <Droppable droppableId={String(listId)}>
          {(provided) => (
           <div {...provided.draggableProps} ref={provided.innerRef} >
              <h4>{title}</h4>
              {cards.map((card, index) => (
                <TrelloCard
                  key={card.id}
                  text={card.text}
                  index={index}
                  id={card.id}
                />
              ))}
              <TrelloActionButton listId={listId} />
              {provided.placeholder}
           
            </div>
          )}
        </Droppable>
        </ListContainer>
      
      )}
   </Draggable>
   
  );
};

// const styles = {
//   container: {
//     backgroundColor: "#dfe3e6",
//     borderRadius: 3,
//     width: 300,
//     height: "100%",
//     padding: 8,
//     marginRight: 10,
//   },
// };
export default TrelloList;
