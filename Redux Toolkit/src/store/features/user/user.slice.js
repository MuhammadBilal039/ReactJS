import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      //  console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue("Something went Wrong!");
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (addBuilder) => {
    addBuilder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    addBuilder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    addBuilder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      // state.error = action.error.message
      state.error = action.payload;
    });
  },
});

export const {} = userSlice.actions;
export { fetchUsers };

export default userSlice.reducer;
