import { useState, createContext } from "react";

export const ContactContext = createContext({ number: 5555 });

export const ContactProvider = ({ children }) => {
  const [num, setNum] = useState("932");
  const setNumber = (value) => setNum(value);

  return (
    <ContactContext.Provider value={{ num, setNumber }}>
      {children}
    </ContactContext.Provider>
  );
};
