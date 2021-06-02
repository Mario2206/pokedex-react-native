import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MoveModel } from '../../models/pokemon.model'
import { MoveListState } from '../types/state.type'

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
