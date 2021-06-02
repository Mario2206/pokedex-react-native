import { useAppSelector } from '../hooks'

export const getMoveListFromState = () =>
    useAppSelector((state) => state.moveList.moves)

export const getMoveListPageFromState = () =>
    useAppSelector((state) => state.moveList.page)

export const getMoveLoadingState = () =>
    useAppSelector((state) => state.moveList.isLoading)
