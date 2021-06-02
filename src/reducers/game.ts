import {
  UPDATE_GAME_SELECTLIST,
  UPDATE_GAME_STATUS,
} from "@constants/game";
import { GameSelectList } from "@constants/types";

type StateType = {
  selectList: GameSelectList,
  gameStatus: string,
};

const INITIAL_STATE: StateType = {
  selectList: [],

  // 三个状态：blank（未开始游戏） || loading（游戏正在加载） || gaming（游戏中）
  gameStatus: 'blank',
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case UPDATE_GAME_SELECTLIST:
      return {
        ...state,
        selectList: payload,
      };

    case UPDATE_GAME_STATUS:
      return {
        ...state,
        gameStatus: payload,
      };
    default:
      return state;
  }
}
