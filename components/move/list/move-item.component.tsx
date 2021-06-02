import { MoveModel } from '../../../models/pokemon.model'
import { ListRenderItem, StyleSheet, Text, View } from 'react-native'
import TypeBadge from '../../labels/type-badge.component'
import React from 'react'
import { COLORS } from '../../../style/color.style'
import { FONT_SIZES } from '../../../style/size.style'

const MoveItem = ({ item }: { item: { move: MoveModel; level?: number } }) => {
    return (
        <View style={styles.itemContainer}>
            <View>
                <Text style={styles.title}>{item.move.names[0].name}</Text>
                {item.level != null && (
                    <Text style={styles.level}>Nv. {item.level}</Text>
                )}
            </View>
            <TypeBadge type={item.move.type} />
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: COLORS.lightGrey,
        borderBottomWidth: 2,
        paddingVertical: 10,
    },
    title: {
        color: COLORS.black,
        fontSize: FONT_SIZES.importantText,
    },
    level: {
        color: COLORS.grey,
    },
})

export default MoveItem
