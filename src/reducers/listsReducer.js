import { CONSTANT } from "../action";

let listId = 2;
let cardId = 5;
const initialState = [
    {
        title: 'To Do',
        id: `listID-${0}`,
        cards: [
            {
                id: `cardID-${0}`,
                text: 'We created a static list'
            },
            {
                id: `cardID-${1}`,
                text: 'We created a static list 2'
            },
        ]
    },
    {
        title: 'Doing',
        id: `listID-${1}`,
        cards: [
            {
                id: `cardID-${2}`,
                text: 'We created a static list 3'
            },
            {
                id: `cardID-${3}`,
                text: 'We created a static list 4'
            },
            {
                id: `cardID-${4}`,
                text: 'We created a static list 5'
            },
        ]
    },
]

const listsReducer = (state = initialState, action) =>{
    switch (action.type) {
       case CONSTANT.ADD_LIST:
        const newList ={
            title: action.payload,
            cards: [],
            id: `listID-${listId}`
        }
        listId +=1
        return [...state, newList];

        case CONSTANT.ADD_CARD: {
            const newCard ={
                text: action.payload.text,
                id: `cardID-${cardId}`
            }
            // console.log('form reducer', action.payload.listId)
            cardId += 1;
            const newState = state.map(list => {
                // console.log('list', list.id)
                if(list.id === action.payload.listId){
                   return{
                    ...list,
                    cards: [...list.cards , newCard]
                   } 
                }else{
                    return list;
                }
            });

            return newState;
        }
            
        case CONSTANT.DRAG_HAPPENED:
                const {
                    droppableIdStart,
                    droppableIdEnd,
                    droppableIndexStart,
                    droppableIndexEnd,
                    draggableId
                } = action.payload;
                const newState = [...state];

                // in the same list
                if(droppableIdStart === droppableIdEnd){
                    const list = state.find(list => droppableIdStart === list.id);
                    const card = list.cards.splice(droppableIndexStart, 1);
                    list.cards.splice(droppableIndexEnd,0, ...card)
                }
                return newState;
        
            default:
            return state;
        
       
    }
}

export default listsReducer;