/* eslint-disable max-classes-per-file */
export class LOCALSTORAGE {
  static get = (key) => JSON.parse(localStorage.getItem(key));

  static save = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

  static remove = (key) => localStorage.removeItem(key);

  static clear = () => localStorage.clear();
}

//  SESSIONSTORAGE BELOW using it to hold the state of the edit form

export class SESSIONSTORAGE {
  static get = (key) => JSON.parse(sessionStorage.getItem(key));

  static save = (key, value) =>
    sessionStorage.setItem(key, JSON.stringify(value));

  static remove = (key) => sessionStorage.removeItem(key);

  static clear = () => sessionStorage.clear();
}
