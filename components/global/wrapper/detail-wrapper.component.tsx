import React from 'react'
import { COLORS } from '../../../style/color.style'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FONT_SIZES } from '../../../style/size.style'
interface DetailsWrapper {
    children: React.ReactNode
    gradientColors: string[]
}

export default function DetailsWrapper({
    children,
    gradientColors,
}: DetailsWrapper) {
    return (
        <LinearGradient style={styles.container} colors={gradientColors}>
            <ScrollView>
                <View
                    style={[
                        styles.subContainer,
                        { minHeight: Dimensions.get('window').height * 0.8 },
                    ]}
                >
                    {children}
                </View>
            </ScrollView>
        </LinearGradient>
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
})
