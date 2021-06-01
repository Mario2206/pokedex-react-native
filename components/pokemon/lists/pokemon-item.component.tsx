import React from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    GestureResponderEvent,
} from 'react-native'
import { PokemonModel } from '../../../models/pokemon.model'
import { fetchImage, formatId } from '../../../helpers/pokemon.helper'
import { COLORS, POKE_TYPES } from '../../../style/color.style'
import { FONT_SIZES } from '../../../style/size.style'
import TypeBadge from '../../labels/type-badge.component'
import toFirstLetterUpperCase from '../../../helpers/text.helper'

interface PokemonItemProps {
    pokemon: PokemonModel
    onPress: (event: GestureResponderEvent) => void
}

function PokemonItem({ pokemon, onPress }: PokemonItemProps) {
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={POKE_TYPES.COLORS[pokemon.types[0].name]}
            onPress={onPress}
        >
            <View style={styles.container}>
                <Image
                    style={styles.miniature}
                    source={{ uri: fetchImage(pokemon.id) }}
                />
                <View style={styles.contentWrapper}>
                    <View>
                        <Text style={styles.name}>
                            {toFirstLetterUpperCase(pokemon.name)}
                        </Text>
                        <Text style={styles.id}>
                            #{formatId(pokemon.id, 3)}
                        </Text>
                    </View>
                    <View style={styles.badgeWrapper}>
                        {pokemon.types.map((type, index) => (
                            <TypeBadge type={type.name} key={index} />
                        ))}
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: COLORS.lightGrey,
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    miniature: {
        width: '15%',
        margin: 10,
        aspectRatio: 1,
    },
    id: {
        color: COLORS.grey,
    },
    name: {
        fontSize: FONT_SIZES.importantText,
        color: COLORS.black,
    },
    badgeWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
})

function arePropsEqual(
    prevProps: PokemonItemProps,
    nextProps: PokemonItemProps
) {
    return prevProps?.pokemon.id === nextProps?.pokemon.id
}

export default React.memo(PokemonItem, arePropsEqual)
