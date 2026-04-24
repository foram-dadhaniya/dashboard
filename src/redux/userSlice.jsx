import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        return await res.json();
    }
)

export const addUser = createAsyncThunk(
    "users/addUser",
    async (userData) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
        });
    return await res.json();
  }
)

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
    return id; 
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, data }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT", // or PATCH
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await res.json();
  }
);

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state) => {
            state.loading = false;
            state.error = "Failed to fetch users";
        })
        .addCase(addUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.users = state.users.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
            );
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.users = state.users.filter(
                (user) => user.id !== action.payload
            );
      });
    }
})

export default usersSlice.reducer;