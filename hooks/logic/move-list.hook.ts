import {
    getMoveListFromState,
    getMoveListPageFromState,
    getMoveLoadingState,
} from '../../redux/selectors/move.selector'
import { useEffect } from 'react'
import MovesService from '../../services/moves.service'
import { Languages } from '../../configuration/languages'
import { MAX_ITEMS_BY_PAGE } from '../../constant/list'
import { useAppDispatch } from '../../redux/hooks'
import {
    addToMoveList,
    incrementPage,
    moveListLoading,
} from '../../redux/slices/move-list.slice'

export default function useMoveList() {
    const moves = getMoveListFromState()
    const page = getMoveListPageFromState()
    const loading = getMoveLoadingState()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(moveListLoading())
        new MovesService(Languages.FR)
            .getMany(page * MAX_ITEMS_BY_PAGE, MAX_ITEMS_BY_PAGE)
            .then((data) => {
                dispatch(addToMoveList(data))
            })
            .catch((e) => {
                console.log(e)
            })
    }, [page])

    const populateMoves = () => {
        if (!loading) {
            dispatch(incrementPage())
        }
    }

    return {
        moves,
        populateMoves,
        loading,
    }
}
