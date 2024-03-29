export const useLocalStorage = () => {

  const setDataLocalStorage = ({key, data}) => {
    localStorage.setItem(key, JSON.stringify(data));
  }

  const getDataLocalStorage = ({key}) => {
    return JSON.parse(localStorage.getItem(key));
  }

  const clearLocalStorage = () => {
    localStorage.clear();
  }

  return {
    setDataLocalStorage,
    getDataLocalStorage,
    clearLocalStorage
  }

}