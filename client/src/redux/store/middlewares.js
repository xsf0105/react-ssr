import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
let middleWare;
if (process.env.NODE_ENV === 'production') {
  middleWare = applyMiddleware(thunk);
} else {
  middleWare = applyMiddleware(thunk, logger);
}
export default middleWare;
