import { useState, createContext } from "react";

// create the context object
const SampleContext = createContext();

// create the context provider (component)
function SampleProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = [user, setUser]

  return (
    <SampleContext.Provider value={value}>{children}</SampleContext.Provider>
  );
}

// export
export { SampleContext, SampleProvider };

// ReactDOM.render(
//    <SampleProvider>
//      <App />
//    </SampleProvider>
