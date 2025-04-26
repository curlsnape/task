import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28, status: 'active', lastLogin: '2023-05-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32, status: 'inactive', lastLogin: '2023-05-10' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45, status: 'active', lastLogin: '2023-05-12' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 23, status: 'inactive', lastLogin: '2023-05-01' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', age: 35, status: 'active', lastLogin: '2023-05-14' },
    { id: 6, name: 'Diana Miller', email: 'diana@example.com', age: 29, status: 'active', lastLogin: '2023-05-08' },
    { id: 7, name: 'Ethan Davis', email: 'ethan@example.com', age: 41, status: 'inactive', lastLogin: '2023-04-28' },
    { id: 8, name: 'Fiona Garcia', email: 'fiona@example.com', age: 31, status: 'active', lastLogin: '2023-05-13' },
    { id: 9, name: 'George Martinez', email: 'george@example.com', age: 27, status: 'inactive', lastLogin: '2023-05-05' },
    { id: 10, name: 'Hannah Robinson', email: 'hannah@example.com', age: 38, status: 'active', lastLogin: '2023-05-16' },
    { id: 11, name: 'Ian Clark', email: 'ian@example.com', age: 33, status: 'active', lastLogin: '2023-05-09' },
    { id: 12, name: 'Jessica Rodriguez', email: 'jessica@example.com', age: 26, status: 'inactive', lastLogin: '2023-04-30' },
  ],
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    updateData: (state, action) => {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteData: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    },
  },
});

export const { addData, updateData, deleteData } = tableSlice.actions;
export default tableSlice.reducer;