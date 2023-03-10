import { createContext, useContext, useEffect, useReducer } from 'react';

const dataContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {});

  useEffect(() => {
    // Check if there is data stored in session storage
    const storedData = sessionStorage.getItem('data');

    if (storedData) {
      // If there is, parse the data and set the state with it
      dispatch({
        type: 'SET_DATA',
        payload: JSON.parse(storedData),
      });
    }
  }, []);

  const setData = (data) => {
    dispatch({
      type: 'SET_DATA',
      payload: data,
    });

    // Store the updated data in session storage
    sessionStorage.setItem('data', JSON.stringify(data));
  };

  return (
    <dataContext.Provider value={{ state, setData }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);

export default DataProvider;
