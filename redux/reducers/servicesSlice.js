const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  services: [    {
        _id: "641dc8c68ec5cd92131af321",
        title: "Gig 1",
        userId: "641c74db2480eac0d9c16a02",
        short_title: "gigs",
        description: "This us a gig",
        totalStars: 5,
        startNumber: 3,
        image: [
          "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
          "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
        ],
        rating: 3,
        price: 400,
        cover:
          "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
        deliveryTime: 3,
        features: ["feature1", "feature2", "feature3"],
        category: "Software Development",
        revisionNumber: 4,
        sales: 0,
        createdAt: "2023-03-24T15:59:02.302Z",
        updatedAt: "2023-03-24T15:59:02.302Z",
        __v: 0,
      }]
};
const ServiceSlice = createSlice({
  name: "services",
  initialState: initialState,
  reducers: {
    getAllServices: (state, action) => {
      state.services = action.payload;
    },
  },
});

export const { getAllServices } = ServiceSlice.actions;

export default ServiceSlice.reducer;
