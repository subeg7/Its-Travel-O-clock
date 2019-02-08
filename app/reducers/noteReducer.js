export default function noteReducer(state,action){
    switch(action.type) {
        case 'add_note' : {
          console.log("Reducer:>"+action.note);
          addNote();
          return state;
        }
        case 'TODO_TOGGLE' : {
          console.log("Reducer is trying to Toogle");
          return state;
        }
        default : return state;
      }
}

//  NoteReducer;