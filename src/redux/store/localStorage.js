export let loadState = () => {
  try {
    let State = localStorage.getItem("boardState");
    if (State === null) {
      return undefined;
    }
    return JSON.parese(State);
  } catch (err) {
    return undefined;
  }
};

export let saveState = state => {
  try {
    let State = JSON.stringify(state);
    localStorage.setItem("boardState", State);
  } catch (err) {
    //ingonre err
  }
};
