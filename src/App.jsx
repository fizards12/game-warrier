import { CssVarsProvider } from "@mui/joy";
import "./App.css";
import { useEffect, useState } from "react";
import Pages from "./Components/Pages";

function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <CssVarsProvider>
        <Pages/>        
      </CssVarsProvider>
    </>
  );
}

export default App;
