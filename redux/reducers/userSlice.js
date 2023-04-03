const { createSlice } = require("@reduxjs/toolkit");

//exported slice
export const UserSlice = createSlice({
  name: "userSlice",
  initialState: {},
  reducers: {
    getusers: (state, action) => {},
  },
});

//export actions
export const { getUsers } = UserSlice.actions;

// export reducer

export default UserSlice.reducer;
