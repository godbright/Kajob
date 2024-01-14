const { createSlice } = require("@reduxjs/toolkit");

//exported slice
export const UserSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
  },
  reducers: {
    getuserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

//export actions
export const { getuserInfo } = UserSlice.actions;

// export reducer

export default UserSlice.reducer;
