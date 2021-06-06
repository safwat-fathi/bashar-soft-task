import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

// thunk functions
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await fetch(`http://api.dataatwork.org/v1/jobs`);
  const data = await response.json();
  return data;
});

const jobsAdapter = createEntityAdapter({
  selectId: (job) => job.uuid,
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState: jobsAdapter.getInitialState(),
  reducers: {
    // todoAdded(state, action) {
    //   const todo = action.payload;
    //   state.entities[todo.id] = todo;
    // },
    // todoToggled(state, action) {
    //   const todoId = action.payload;
    //   const todo = state.entities[todoId];
    //   todo.completed = !todo.completed;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        jobsAdapter.setAll(state, action.payload);
        state.status = "idle";
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.status = "loading";
      });
  },
});

// export const { todoAdded, todoToggled } = jobsSlice.actions;

export default jobsSlice.reducer;

export const jobsSelectors = jobsAdapter.getSelectors((state) => state.jobs);
