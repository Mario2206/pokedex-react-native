import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchHeaderComponent from '../../../components/global/headers/search-header.component'
import useMoveList from '../../../hooks/logic/move-list.hook'
import MainList from '../../../components/global/list/main-list.component'
import MoveItem from '../../../components/move/list/move-item.component'
import { StackNavigationProp } from '@react-navigation/stack'
import { MoveStackParamList } from '../move.navigation'

interface HomeScreenProps {
    navigation: StackNavigationProp<MoveStackParamList, 'Home'>
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
    const { moves, populateMoves, loading } = useMoveList()

    const RenderItem = ({ item }: any) => (
        <MoveItem
            item={{ move: item }}
            onPress={() => navigation.navigate('MoveDetails', { move: item })}
        />
    )

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
