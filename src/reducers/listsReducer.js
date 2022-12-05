import { CONSTANT } from "../action";

let listId = 2;
let cardId = 3;
const initialState = [
    {
        title: 'To Do',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'We created a static list'
            },
            {
                id: 1,
                text: 'We created a static list 2'
            },
        ]
    },
    {
        title: 'Doing',
        id: 1,
        cards: [
            {
                id: 0,
                text: 'We created a static list 3'
            },
            {
                id: 1,
                text: 'We created a static list 4'
            },
            {
                id: 3,
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
            id: listId
        }
        listId +=1
        return [...state, newList];

        case CONSTANT.ADD_CARD:
            const newCard ={
                text: action.payload.text,
                id: cardId
            }
            console.log('form reducer', action.payload.listId)
            cardId += 1;
            const newState = state.map(list => {
                console.log('list', list.id)
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
        default:
            return state;
    }
}

export default listsReducer;