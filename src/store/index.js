import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { Article, Pattern, Project, Board, Task } from "./api";

export const store = configureStore({ 
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({

    }).concat(Article.middleware, 
        Pattern.middleware, 
        Project.middleware, 
        Board.middleware, 
        Task.middleware
    ),
})
