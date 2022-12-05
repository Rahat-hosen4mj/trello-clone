import React from 'react';
import TrelloActionButton from './TrelloActionButton';
import TrelloCard from './TrelloCard';

const TrelloList = ({title, cards, listId}) => {
    //  console.log('list id', listId)
    return (
        <div style={styles.container}>
           <h4>{title}</h4>
           {
            cards.map(card => ( <TrelloCard key={card.id} text={card.text} />))
           }
           <TrelloActionButton listId={listId} />
        </div>
    );
};

const styles = {
    container:{
        backgroundColor: '#dfe3e6',
        borderRadius: 3,
        width: 300,
        height: "100%",
        padding:8,
        marginRight: 10
    }
}
export default TrelloList;