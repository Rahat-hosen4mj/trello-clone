import React from "react";
import TrelloActionButton from "./TrelloActionButton";
import TrelloCard from "./TrelloCard";
import { Droppable } from "react-beautiful-dnd";

const TrelloList = ({ title, cards, listId }) => {
  //  console.log('list id', listId)
  return (
    <Droppable droppableId={String(listId)}>
      {(provider) => (
        <div {...provider.droppableProps} ref={provider.innerRef} style={styles.container}>
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <TrelloCard  
            key={card.id} 
            text={card.text}
            index={index} 
            id={card.id} />
          ))}
          <TrelloActionButton listId={listId} />
          {provider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    height: "100%",
    padding: 8,
    marginRight: 10,
  },
};
export default TrelloList;
