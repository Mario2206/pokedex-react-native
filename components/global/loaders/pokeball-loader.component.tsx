import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, StyleSheet, View } from 'react-native'
import { COLORS } from '../../../style/color.style'

export default function PokeballLoader() {
    const rotateAnim = useRef(new Animated.Value(0)).current
    const rotateValue = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    })

    const size = Dimensions.get('window').width * 0.3

    const runAnimation = () => {
        rotateAnim.setValue(0)
        Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(runAnimation)
    }

    useEffect(() => {
        runAnimation()
    }, [rotateAnim])

    return (
        <View style={styles.wrapper}>
            <Animated.View
                style={[
                    styles.container,
                    {
                        width: size,
                        height: size,
                        transform: [
                            {
                                rotate: rotateValue,
                            },
                        ],
                    },
                ]}
            >
                <View style={[styles.part, styles.redPart]} />
                <View style={styles.centerWrapper}>
                    <View style={styles.belt}>
                        <View
                            style={[
                                styles.circleBelt,
                                { width: size * 0.3, height: size * 0.3 },
                            ]}
                        />
                    </View>
                </View>
                <View style={[styles.part, styles.whitePart]} />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: COLORS.black,
        overflow: 'hidden',
        position: 'relative',
    },
    part: {
        flex: 1,
    },
    redPart: {
        backgroundColor: COLORS.red,
    },
    whitePart: {
        backgroundColor: COLORS.white,
    },
    centerWrapper: {
        position: 'absolute',
        zIndex: 10,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    belt: {
        height: '10%',
        backgroundColor: COLORS.black,
        width: '110%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleBelt: {
        backgroundColor: COLORS.white,
        borderRadius: 100,
        borderWidth: 7,
        borderColor: COLORS.black,
    },
})
