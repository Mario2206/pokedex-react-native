import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native'
import { detectScrollToBottom } from '../../helpers/scroll.helper'
import React from 'react'
import { IdProps } from '../../types/props'
import PokeballLoader from '../loaders/pokeball-loader.component'

interface MainListProps<T extends IdProps> {
    items: T[]
    onEndScroll?: () => void
    renderItem: ListRenderItem<T>
    isLoading?: boolean
}

export default function MainList<T extends IdProps>({
    items,
    onEndScroll,
    renderItem,
    isLoading = false,
}: MainListProps<T>) {
    const RenderItem = renderItem

    return (
        <View style={styles.container}>
            {isLoading && (
                <View style={styles.loaderContainer}>
                    <PokeballLoader />
                </View>
            )}
            <FlatList
                data={items}
                renderItem={(props) => (
                    <View style={styles.items}>
                        <RenderItem {...props} />
                    </View>
                )}
                keyExtractor={(item) => String(item.id)}
                onScroll={
                    onEndScroll ? detectScrollToBottom(onEndScroll) : undefined
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 4,
    },
    items: {
        paddingHorizontal: 10,
    },
    loaderContainer: {
        zIndex: 100,
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
