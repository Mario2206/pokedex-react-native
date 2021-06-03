import React, { ReactChildren } from 'react'
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { PokemonModel } from '../../../models/pokemon.model'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, POKE_TYPES } from '../../../style/color.style'
import { FONT_SIZES } from '../../../style/size.style'
import TypeLabel from '../../global/labels/type-label.component'
import toFirstLetterUpperCase from '../../../helpers/text.helper'
import { fetchImage } from '../../../helpers/pokemon.helper'
import DetailsWrapper from '../../global/wrapper/detail-wrapper.component'
import PageLoader from '../../global/loaders/page-loader.component'

interface PokemonDetailsComponentProps {
    pokemon: PokemonModel | undefined
    children: JSX.Element | undefined
}

export default function PokemonDetailsComponent({
    pokemon,
    children,
}: PokemonDetailsComponentProps) {
    if (!pokemon) {
        return <PageLoader />
    }

    return (
        <DetailsWrapper
            gradientColors={POKE_TYPES.GRADIENTS[pokemon.types[0].name]}
        >
            <Image
                source={{ uri: fetchImage(pokemon.id) }}
                style={[
                    styles.image,
                    { top: -Dimensions.get('window').height * 0.1 },
                ]}
            />
            <Text style={styles.name}>
                {toFirstLetterUpperCase(pokemon.name)}
            </Text>
            <View style={styles.labelWrapper}>
                {pokemon.types.map((type, index) => (
                    <TypeLabel
                        style={styles.label}
                        type={type.name}
                        key={index}
                        displayName={type.display_name}
                    />
                ))}
            </View>
            <Text style={styles.description}>
                {pokemon.species.flavor_text_entries[0].flavor_text
                    .split('\n')
                    .join(' ')}
            </Text>
            {children}
        </DetailsWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    subContainer: {
        backgroundColor: COLORS.white,
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        paddingBottom: 10,
        marginTop: '50%',
        paddingHorizontal: '10%',
    },
    image: {
        width: '50%',
        aspectRatio: 1,
        position: 'absolute',
    },
    name: {
        textAlign: 'center',
        fontSize: FONT_SIZES.title,
        marginTop: 100,
    },
    labelWrapper: {
        paddingVertical: 20,
    },
    label: {
        marginVertical: 10,
    },
    description: {
        width: '100%',
        textAlign: 'center',
        color: COLORS.black,
        fontSize: FONT_SIZES.text,
    },
})
