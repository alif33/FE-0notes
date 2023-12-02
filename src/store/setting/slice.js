import { createSlice } from '@reduxjs/toolkit';

export const settingSlice = createSlice({
    name: "setting",
    initialState: {
        query: {
            name: "Articles",
            path: "ar",
            endPoint: "articles"
        }
    },
    reducers: {

        shiftingQuery: (state, action) => {
            return {
                ...state,
                query: {
                    ...action.payload,
                }
            }
        },

    }
})