import { combineReducers } from '@reduxjs/toolkit';
import { settingSlice } from './setting/slice';
import { Article, Pattern, Project, Board, Task } from './api';

export const rootReducer = combineReducers({
    [Article.reducerPath]: Article.reducer,
    [Pattern.reducerPath]: Pattern.reducer,
    [Project.reducerPath]: Project.reducer,
    [Board.reducerPath]: Board.reducer,
    [Task.reducerPath]: Task.reducer,
    setting: settingSlice.reducer
})