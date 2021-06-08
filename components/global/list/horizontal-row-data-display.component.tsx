import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../style/color.style'
import { FONT_SIZES } from '../../../style/size.style'

interface HorizontalRowDataDisplay {
    data: { value: string; label: string }[]
    titleColor: string
}

export default function HorizontalRowList({
    data,
    titleColor,
}: HorizontalRowDataDisplay) {
    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <React.Fragment key={index}>
                    <View style={styles.item}>
                        <Text style={[{ color: titleColor }, styles.title]}>
                            {item.label}
                        </Text>
                        <Text style={styles.value}>{item.value}</Text>
                    </View>
                    {index < data.length - 1 && (
                        <View style={styles.delimiter} />
                    )}
                </React.Fragment>
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: FONT_SIZES.text,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    value: {
        fontSize: FONT_SIZES.text,
        marginVertical: 30,
    },
})
