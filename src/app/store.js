import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/post/postsSlice'
export default configureStore({
  reducer: {posts:postReducer}
})
