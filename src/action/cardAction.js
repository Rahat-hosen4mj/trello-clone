import { CONSTANT } from "../action";

export const addCard = (listId, text) =>{
    console.log('form cardAction', listId, text)
  return{
    type: CONSTANT.ADD_CARD,
    payload: {text, listId}
  }
}