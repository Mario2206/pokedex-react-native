import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { COLORS } from '../../../style/color.style'
import { FONT_SIZES } from '../../../style/size.style'

//@ts-ignore
import SearchLogo from '../../../assets/search.svg'

export default function SearchHeaderComponent() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pokemon</Text>
            <View style={styles.searchWrapper}>
                <SearchLogo width={50} height={20} />
                <TextInput placeholder={'Recherche'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.red,
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 20,
    },
    title: {
        color: COLORS.white,
        fontSize: FONT_SIZES.subtitle,
        textAlign: 'center',
        marginBottom: 20,
    },
    searchWrapper: {
        backgroundColor: COLORS.white,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 5,
    },
})
