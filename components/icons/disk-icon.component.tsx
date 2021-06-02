import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from '../../types/props'
import { COLORS } from '../../style/color.style'

interface DiskIcon extends IconProps {}

export default function DiskIcon({ isFocused }: DiskIcon) {
    return (
        <Svg
            fill={isFocused ? COLORS.black : COLORS.white}
            width="26"
            height="26"
            viewBox="0 0 26 26"
        >
            <Path
                id="Oval_551"
                data-name="Oval 551"
                d="M13,26A13,13,0,0,1,3.808,3.808,13,13,0,1,1,22.192,22.192,12.915,12.915,0,0,1,13,26Zm3.346-9.606-.757.635,3.55,6.087,1.292-1.058Zm1.369-3.31a5.613,5.613,0,0,1-.337,1.776c-.019.053-.7,1.224-.779,1.357l4.526,5.325a24.751,24.751,0,0,0,2.614-3.785,21.78,21.78,0,0,0,.98-3.989ZM13,8.987A4.013,4.013,0,1,0,17.013,13,4.017,4.017,0,0,0,13,8.987ZM4.948,4.156h0A27.21,27.21,0,0,0,2.578,7.708a34.208,34.208,0,0,0-1.411,4.43l7.123,1.111a.08.08,0,0,1,0-.021A11.812,11.812,0,0,1,8.8,11.233a8.208,8.208,0,0,1,.972-1.391L4.948,4.156ZM6.967,2.863l-1.245.918,4.3,5.742.525-.446L6.967,2.863ZM13,16.1a3.05,3.05,0,1,1,3.05-3.05A3.053,3.053,0,0,1,13,16.1Zm0-4.224A1.124,1.124,0,1,0,14.124,13,1.124,1.124,0,0,0,13,11.876Z"
                transform="translate(0 0)"
            />
        </Svg>
    )
}
