import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// createStore的时候传入thunk中间件
const store = createStore(rootReducer, applyMiddleware(thunk));

// 发起网络请求的方法
function fetchSecretSauce() {
  return fetch('https://www.baidu.com/s?wd=Secret%20Sauce');
}

// 下面两个是普通的action
function makeASandwich(forPerson, secretSauce) {
  return {
    type: 'MAKE_SANDWICH',
    forPerson,
    secretSauce,
  };
}

function apologize(fromPerson, toPerson, error) {
  return {
    type: 'APOLOGIZE',
    fromPerson,
    toPerson,
    error,
  };
}

// 这是一个异步action，先请求网络，成功就makeASandwich，失败就apologize
function makeASandwichWithSecretSauce(forPerson) {
  return function (dispatch) {
    return fetchSecretSauce().then(
      (sauce) => dispatch(makeASandwich(forPerson, sauce)),
      (error) => dispatch(apologize('The Sandwich Shop', forPerson, error)),
    );
  };
}

// 最终dispatch的是异步action makeASandwichWithSecretSauce
store.dispatch(makeASandwichWithSecretSauce('Me'));


window.addEventListener('scroll', fangdou(handler, 1000))

function fangdou(fn,delay) {
  var timer = null;
  return function() {
    if(timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  }
}


function handler() {
  console.log('滑动了')
}


function jieliu(fn, delay) {
  var timer = null;
  return function() {
    var context = this;
    var args = arguments;
    if(!timer) {
      timer = setTimeout(function() {
        fn.applay(context, args);
      },delay)
    }
  }
}

function jieliu(fn,delay) {
  var timer = null;
  var startTime = Date.now();
  return function() {
    var curTimer = Date.now();
    var context = this;
    var args = arguments;
    var remaining = delay - (curTimer-startTime);
    clearTimeout(timer);
    if(remaining <= 0) {
      fn.applay(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(fn, remaining);
    }
  }
}