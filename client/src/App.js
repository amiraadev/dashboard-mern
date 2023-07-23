
import { CssBaseline , ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "scenes/Dashboard";
import Layout from "scenes/Layout";
import { themeSettings } from "theme";



function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode])
  return (
    <div className="app">
      <BrowserRouter >
        <Routes>
            <Route element={<Layout/>}>            
                <Route path="/" element={<Navigate to ="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
      </BrowserRouter>
           <ThemeProvider theme={theme} >
          <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
