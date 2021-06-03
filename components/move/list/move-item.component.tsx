import {
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native'
import TypeBadge from '../../global/labels/type-badge.component'
import React from 'react'
import { COLORS, POKE_TYPES } from '../../../style/color.style'
import { FONT_SIZES } from '../../../style/size.style'
import { MoveModel } from '../../../models/move.model'

interface MoveItemProps {
    item: { move: MoveModel; level?: number }
    onPress?: VoidFunction
}

const MoveItem = ({ item, onPress }: MoveItemProps) => {
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={POKE_TYPES.COLORS[item.move.type]}
            onPress={onPress}
        >
            <View style={styles.itemContainer}>
                <View>
                    <Text style={styles.title}>{item.move.names[0].name}</Text>
                    {item.level != null && (
                        <Text style={styles.level}>Nv. {item.level}</Text>
                    )}
                </View>
                <TypeBadge type={item.move.type} />
            </View>
        </TouchableHighlight>
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
        paddingHorizontal: 10,
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
