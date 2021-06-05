import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const jobsAdapter = createEntityAdapter();

// thunk functions
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await fetch(`http://api.dataatwork.org/v1/jobs`);
  const data = await response.json();
  // console.log(data);
  return data;
});

const initialState = {
  status: "idle",
  entities: {},
  ids: [],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
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
        const newEntites = {};

        action.payload.forEach((job) => {
          newEntites[job.uuid] = job;
        });

        state.entities = newEntites;
        state.status = "idle";
        // console.log(state.entities);
      });
  },
});

// export const { todoAdded, todoToggled } = jobsSlice.actions;

export default jobsSlice.reducer;

export const { selectAll } = jobsAdapter.getSelectors((state) => state.jobs);
