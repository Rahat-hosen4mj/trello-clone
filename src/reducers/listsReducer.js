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
        ]
    },
]

const listsReducer = (state = initialState, action) =>{
    switch (action.type) {
       
    
        default:
            return state;
    }
}

export default listsReducer;