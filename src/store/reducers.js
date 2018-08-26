import * as ActionTypes from './actions/action_types';

const initialState = {
	navIsClear: true
}

export default function StateReducer(state=initialState, action) {

  switch(action.type) {
    case ActionTypes.MAKE_NAV_CLEAR: {
      return {
        ...state,
        navIsClear: true
      };
    }
    case ActionTypes.MAKE_NAV_WHITE: {
      return {
        ...state,
        navIsClear: false
      };
    }

  //   case PlayerActionTypes.REMOVE_PLAYER: {
  //     const removePlayerList = [
  //       ...state.players.slice(0, action.index),
  //       ...state.players.slice(action.index + 1)
  //     ];

  //     return {
  //         ...state,
  //         players: removePlayerList
  //     };
  //   }
      
  //   case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
  //     const updatePlayerList = state.players.map((player, index) => {
  //       if(index === action.index) {
  //         return {
  //           ...player,
  //           score: player.score + action.score,
  //           updated: `${month}/${day}/${year}`
  //         };
  //       }
  //       return player;
  //     });
  //     return {
  //       ...state,
  //       players: updatePlayerList
  //     };
  //   }

  //   case PlayerActionTypes.SELECT_PLAYER:{
  //     return {
  //       ...state,
  //       selectedPlayerIndex: action.index
  //     };
  //   }
      
    default:
      return state;
  }
}
