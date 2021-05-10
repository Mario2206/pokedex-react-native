import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { searchIcon } from '../assets/icons.asset'
import { COLORS } from '../style/color.style'
import { FONT_SIZES } from '../style/size.style'

export default function SearchHeaderComponent() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pokemon</Text>
            <View>
                <TextInput />
                <SvgXml xml={searchIcon} />
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
    },
    title: {
        color: COLORS.white,
        fontSize: FONT_SIZES.subtitle,
        textAlign: 'center',
    },
})
