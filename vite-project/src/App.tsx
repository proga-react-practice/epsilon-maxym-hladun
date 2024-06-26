import React, { useState } from "react";
import AddOrderForm from "./AddOrderForm";
import Cards from "./Cards";
import "./index.css";
import { Project } from "./Utils";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#000000",
    },
    background: {
      default: "#F1F3F4",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "rgb(255, 165, 0)",
    },
    background: {
      default: "#202124",
    },
  },
});

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className={`main ${darkMode ? "dark-background" : "light-background"}`}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <IconButton
          onClick={toggleDarkMode}
          aria-label="toggle dark mode"
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <Brightness4Icon />
        </IconButton>
        <AddOrderForm addProject={addProject} darkMode={darkMode} />
        <Cards
          projects={projects}
          deleteProject={deleteProject}
          darkMode={darkMode}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;
