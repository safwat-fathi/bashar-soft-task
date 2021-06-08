import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

// thunk functions
// fetch all jobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await fetch(`http://api.dataatwork.org/v1/jobs`);
  const data = await response.json();

  return data.slice(0, -1).map(({ uuid, title }) => ({ uuid, title }));
});

// fetch a job by id
export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (jobId) => {
    const response = await fetch(`http://api.dataatwork.org/v1/jobs/${jobId}`);
    const data = await response.json();

    return data;
  }
);

// fetch a job skills by id
export const fetchJobSkillsById = createAsyncThunk(
  "jobs/fetchJobSkillsById",
  async (jobId) => {
    const response = await fetch(
      `http://api.dataatwork.org/v1/jobs/${jobId}/related_skills`
    );
    const data = await response.json();

    return data.skills;
  }
);

// fetch job related jobs by ID cases
export const fetchJobRelatedJobsById = createAsyncThunk(
  "jobs/fetchJobRelatedJobsById",
  async (jobId) => {
    const response = await fetch(
      `http://api.dataatwork.org/v1/jobs/${jobId}/related_jobs`
    );
    const data = await response.json();

    return data.related_job_titles;
  }
);

// slice adapters
const jobsAdapter = createEntityAdapter({
  selectId: (job) => job.uuid,
});

const skillsAdapter = createEntityAdapter({
  selectId: (skill) => skill.skill_uuid,
});

const relatedJobsAdapter = createEntityAdapter({
  selectId: (job) => job.uuid,
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState: jobsAdapter.getInitialState({
    status: "idle",
    skills: skillsAdapter.getInitialState(),
    relatedJobs: relatedJobsAdapter.getInitialState(),
  }),
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
    // fetch all jobs cases
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        jobsAdapter.setAll(state, action.payload);
        state.status = "idle";
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.status = "loading";
      });

    // fetch a job by ID cases
    builder
      .addCase(fetchJobById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        // jobsAdapter.setAll(state, action.payload);
        state.status = "idle";
      })
      .addCase(fetchJobById.rejected, (state) => {
        state.status = "loading";
      });

    // fetch job skills by ID cases
    builder
      .addCase(fetchJobSkillsById.pending, (state) => {
        state.skills.status = "loading";
      })
      .addCase(fetchJobSkillsById.fulfilled, (state, action) => {
        // skillsAdapter.setAll(state, action.payload);
        skillsAdapter.setAll(state.skills, action.payload);
        state.skills.status = "idle";
      })
      .addCase(fetchJobSkillsById.rejected, (state) => {
        state.skills.status = "loading";
      });

    // fetch job related jobs by ID cases
    builder
      .addCase(fetchJobRelatedJobsById.pending, (state) => {
        state.relatedJobs.status = "loading";
      })
      .addCase(fetchJobRelatedJobsById.fulfilled, (state, action) => {
        relatedJobsAdapter.setAll(state.relatedJobs, action.payload);
        state.relatedJobs.status = "idle";
      })
      .addCase(fetchJobRelatedJobsById.rejected, (state) => {
        state.relatedJobs.status = "loading";
      });
  },
});

// export const { todoAdded, todoToggled } = jobsSlice.actions;

export default jobsSlice.reducer;

// jobs selectors
export const jobsSelectors = jobsAdapter.getSelectors((state) => state.jobs);
// skills selectors
export const skillsSelectors = skillsAdapter.getSelectors(
  (state) => state.jobs.skills
);
// related jobs selectors
export const relatedJobsSelectors = relatedJobsAdapter.getSelectors(
  (state) => state.jobs.relatedJobs
);
