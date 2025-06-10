export const reducer = (state, action) => {
  if(action.type === "ADD_PEOPLE"){
    const newPeople = [...state.people, action.payload]
    return {
      ...state, 
      people:newPeople, 
      isModalOpen:true, 
      modalContent:"people added"}
  }
  if(action.type === "NO_VALUE"){
    return { ...state, isModalOpen:true, modalContent:"please provide value"}
  }
  if(action.type === "CLOSE_MODAL"){
    return { ...state, isModalOpen:false }
  }
  if(action.type === "REMOVE_PEOPLE"){
    const newPeople = state.people.filter((person) => person.id !== action.payload)
    return {...state, people:newPeople}
  }
  throw new Error('no matching action type');
}
