import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MoveListState } from '../types/state.type'
import { MoveModel } from '../../models/move.model'

const initialState: MoveListState = {
    moves: [] as MoveModel[],
    isLoading: false,
    page: 0,
}

export const moveListSlice = createSlice({
    name: 'moveList',
    initialState,
    reducers: {
        addToMoveList: (state, action: PayloadAction<MoveModel[]>) => {
            state.isLoading = false
            state.moves = [...state.moves, ...action.payload]
        },
        moveListLoading: (state) => {
            state.isLoading = true
        },
        incrementPage: (state) => {
            state.page++
        },
    },
})

export const { moveListLoading, incrementPage, addToMoveList } =
    moveListSlice.actions
