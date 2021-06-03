import React from 'react'
import { StyleSheet, View } from 'react-native'
import PokeballLoader from './pokeball-loader.component'

export default function PageLoader() {
    return (
        <View style={styles.container}>
            <PokeballLoader />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
