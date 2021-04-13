import { createContext, useContext, useState } from 'react';

const CityDialogContext = createContext();

export function CityDialogWraper({ children }) {
  const [dialog, setDialog] = useState({isOpen: false,data:null})

  return (
    <CityDialogContext.Provider value={{dialog,setDialog}}>
      {children}
    </CityDialogContext.Provider>
  );
}

export function useCityDialogContext() {
  return useContext(CityDialogContext);
}