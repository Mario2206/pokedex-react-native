import React from 'react'
import DetailsWrapper from '../../global/wrapper/detail-wrapper.component'
import { MoveModel } from '../../../models/move.model'
import TypeBadge from '../../global/labels/type-badge.component'
import { POKE_TYPES } from '../../../style/color.style'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { FONT_SIZES } from '../../../style/size.style'
import TypeLabel from '../../global/labels/type-label.component'
import HorizontalRowList from '../../global/list/horizontal-row-data-display.component'

interface MoveDetailsProps {
    move: MoveModel
}

export default function MoveDetails({ move }: MoveDetailsProps) {
    return (
        <DetailsWrapper gradientColors={POKE_TYPES.GRADIENTS[move.type]}>
            <TypeBadge
                style={{
                    ...styles.badge,
                    top: -Dimensions.get('window').height * 0.05,
                }}
                type={move.type}
            />
            <Text style={styles.name}>{move.names[0].name}</Text>
            <TypeLabel type={move.type} displayName={move.type} />
            <Text>{move.description}</Text>
            <HorizontalRowList
                data={[
                    {
                        label: 'Base Power',
                        value: String(move.power),
                    },
                    {
                        label: 'Accuracy',
                        value: String(move.accuracy),
                    },
                    {
                        label: 'PP',
                        value: String(move.pp),
                    },
                ]}
            />
        </DetailsWrapper>
    )
}

const styles = StyleSheet.create({
    badge: {
        width: '30%',
        position: 'absolute',
    },
    name: {
        textAlign: 'center',
        fontSize: FONT_SIZES.title,
        marginTop: 100,
    },
})
