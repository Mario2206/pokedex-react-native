import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import { COLORS } from '../../style/color.style'
import { IconProps } from '../../types/props'

interface PikachuIconProps extends IconProps {}

export default function PikachuIcon({ isFocused }: PikachuIconProps) {
    return (
        <Svg
            fill={isFocused ? COLORS.black : COLORS.white}
            width="28.004"
            height="28.351"
            viewBox="0 0 28.004 28.351"
        >
            <G
                id="Active_Icon"
                data-name="Active Icon"
                transform="translate(-0.996)"
            >
                <Path
                    id="Oval_566"
                    data-name="Oval 566"
                    d="M7.511,24.96c.563.951,1.862.742,1.842.951-.069.726-.094.277,0,.767a1.278,1.278,0,0,0,.881,1.05c.157,0,.485-.271.582-.756.032-.159-.034-.47,0-.663.09-.516.1-.684.895-.929a7.386,7.386,0,0,1,1.792-.47,1.424,1.424,0,0,1,.869.321,11.113,11.113,0,0,0,2.155.681c.32.026,1.465-.082,1.465-.082a5.062,5.062,0,0,0,.247,1.529,2.732,2.732,0,0,0,1.027.992,3.452,3.452,0,0,0,.381-1.175c.01-.236-.325-.8-.381-1.177a1.115,1.115,0,0,1,.127-.769s.348-.8.567-1.193a2.664,2.664,0,0,0,.441-1.676c-.026-.657-1.075-1.231-.56-1.367a7.61,7.61,0,0,0,2.267-.95L20.865,17.96l1.846-1.8-.6-3.125L28,9.439,26.546,3.268s-2.66,2.153-3.934,3.4c-1.366,1.338-3.983,4.355-3.983,4.355L20.562,15.4l-2.323,1.941s1.6,2.137,2.011,2.044c.351-.08-1.02.265-1.089.265,0,0-4.489-6.312-4.489-6.312a40.136,40.136,0,0,1-1.129-4.521c.259-.618.337-.008,1.129-.176A10.554,10.554,0,0,0,17.82,7.229c1.253-.84,4.1-2.169,3.045-2.773a3.835,3.835,0,0,0-1.7-.071,10.537,10.537,0,0,0-3.663.676,16.3,16.3,0,0,0-3.992,2.169s-1.1-.287-2.719-.648-2.756.966-2.967,0c-.053-.243.148-.426.242-.721.209-.653.484-1.405.484-1.405A16.128,16.128,0,0,0,6.86,2.133,5.054,5.054,0,0,0,6.614,0,8.51,8.51,0,0,0,5.3,1.706a8.019,8.019,0,0,0-.72,1.83,7.172,7.172,0,0,0-.547,2.248c-.079.614.022,1.531-.067,2.376-.062.592-.3.513-.5.886a7.341,7.341,0,0,0-.644,2.261,2.164,2.164,0,0,0-.415,2.149A4.883,4.883,0,0,0,4.034,15.51a4.081,4.081,0,0,0-2.1.528c-.518.279-.721.694-.979.633A.806.806,0,0,0,.011,17s.813-.065.837.208-.754.609-.754.68.769-.257.826.227-.306.67-.826.686c-.7.022,2.806.291,3.618.414a18.02,18.02,0,0,1,2.65.77,1.452,1.452,0,0,1,.621,1.011c0,.891-.122,2.117-.122,2.724C6.86,23.95,6.948,24.009,7.511,24.96Z"
                    transform="translate(0.996)"
                />
            </G>
        </Svg>
    )
}
