import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

// thunk functions
export const fetchSkills = createAsyncThunk("skills/fetchSkills", async () => {
  const response = await fetch(`http://api.dataatwork.org/v1/skills`);
  const data = await response.json();

  return data
    .slice(0, -1)
    .map(({ uuid, name, type }) => ({ uuid, name, type }));
});

const skillsAdapter = createEntityAdapter({
  selectId: (skill) => skill.uuid,
});

const skillsSlice = createSlice({
  name: "skills",
  initialState: skillsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (buidler) => {
    // fetch all skills
    buidler
      .addCase(fetchSkills.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        jobsAdapter.setAll(state, action.payload);
        state.status = "idle";
      })
      .addCase(fetchSkills.rejected, (state) => {
        state.status = "loading";
      });
  },
});
