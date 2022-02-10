
export function actionDecrement  () {
  return { type: "DECREMENT"}
}

export function actionIncrement  () {
  return { type: "INCREMENT"}
}

export function actionIncrementNumber  (number) {
  return { type: "INCREMENT_NUMBER", payload: number}
}

export const addPostAction = (post) =>{
  return {type:'ADD_POST', payload: post}
}