import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "SearchSlice",
  initialState: {
    search: "",
  },
  reducers: {
    setSearch: (state, action) => {
        state.search=action.payload
    },
  },
});

export const {setSearch}=SearchSlice.actions;
export default SearchSlice.reducer;