type BotErrorType = 0 | 102 | 20003 | 20011 | 20012;

const NO_ERROR: BotErrorType = 0;
const OFF_THE_FLOOR_ERROR: BotErrorType = 102;
const TASK_TYPE_NOT_SUPPORTED_ERROR: BotErrorType = 20003;
const HANDLE_DEAL_MSG_FAIL_ERROR: BotErrorType = 20011;
const GET_POINT_COUNT_OUT_OF_RANGE_ERROR: BotErrorType = 20012;

export {
  BotErrorType,
  NO_ERROR,
  TASK_TYPE_NOT_SUPPORTED_ERROR,
  OFF_THE_FLOOR_ERROR,
  HANDLE_DEAL_MSG_FAIL_ERROR,
  GET_POINT_COUNT_OUT_OF_RANGE_ERROR,
};