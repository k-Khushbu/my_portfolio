import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { projectsData } from '../data/projectsData';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: projectsData,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
