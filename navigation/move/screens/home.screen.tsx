import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchHeaderComponent from '../../../components/headers/search-header.component'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <SearchHeaderComponent />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
