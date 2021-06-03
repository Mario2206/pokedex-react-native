import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../style/color.style'

interface HorizontalRowDataDisplay {
    data: { value: string; label: string }[]
}

export default function HorizontalRowList({ data }: HorizontalRowDataDisplay) {
    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <>
                    <View style={styles.item} key={index}>
                        <Text>{item.label}</Text>
                        <Text>{item.value}</Text>
                    </View>
                    {index < data.length - 1 && (
                        <View style={styles.delimiter} />
                    )}
                </>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    delimiter: {
        height: '100%',
        width: 2,
        backgroundColor: COLORS.lightGrey,
    },
    item: {
        // marginRight: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
})
