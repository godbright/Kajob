const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  categories: [
    {
      _id: "641ee5ab32ba119ab8eaca82",
      image:
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
      title: "Software Engineering",
      desc: "desc 1",
      createdAt: "2023-03-25T12:14:35.880Z",
      updatedAt: "2023-03-25T12:14:35.880Z",
      __v: 0,
    },
  ],
  pending: null,
  error: false,
};

const CategoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    getAllCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { getAllCategories } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
