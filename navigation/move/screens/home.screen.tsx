import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchHeaderComponent from '../../../components/headers/search-header.component'
import useMoveList from '../../../hooks/logic/move-list.hook'
import MainList from '../../../components/list/main-list.component'
import MoveItem from '../../../components/move/list/move-item.component'

export default function HomeScreen() {
    const { moves, populateMoves, loading } = useMoveList()

    const RenderItem = React.memo(({ item }: any) => (
        <MoveItem item={{ move: item }} />
    ))

    return (
        <View style={styles.container}>
            <SearchHeaderComponent />
            <MainList
                isLoading={loading}
                onEndScroll={populateMoves}
                renderItem={RenderItem}
                items={moves}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
