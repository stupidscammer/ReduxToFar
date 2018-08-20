import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// omit imports and state

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await client.get('/fakeApi/todos')
  return response.todos
})

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        const newEntities = {}
        action.payload.forEach(todo => {
          newEntities[todo.id] = todo
        })
        state.entities = newEntities
        state.status = 'idle'
      })
  }
})
  export const { todoAdded, todoToggled, todoColorSelected, todoDeleted } =
    todosSlice.actions
  
  export default todosSlice.reducer