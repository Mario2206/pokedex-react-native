import { NativeScrollEvent } from 'react-native'

export function detectScrollToBottom(action: () => void) {
    return function ({ nativeEvent }: { nativeEvent: NativeScrollEvent }) {
        const y = nativeEvent.contentOffset.y
        const contentSizeHeight = nativeEvent.contentSize.height
        const layoutMeasure = nativeEvent.layoutMeasurement.height

        if (y + layoutMeasure >= contentSizeHeight * 0.9) {
            action()
        }
    }
}
