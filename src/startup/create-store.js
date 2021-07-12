import {configureStore} from '@reduxjs/toolkit'

import { rootReducer } from 'startup/root-reducer'

export const createStore = () => configureStore({reducer: rootReducer})
