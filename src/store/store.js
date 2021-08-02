import { configureStore } from "@reduxjs/toolkit";

import campaignSlice from "./campaign-slice";

const store = configureStore(
{
    reducer:
    {
        campaigns:campaignSlice.reducer
    }
});

export default store;