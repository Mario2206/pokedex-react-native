import React from 'react'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import store from './redux/store'
import MainNavigation from './navigation/main.navigation'

export default function App() {
    return (
        <Provider store={store}>
            <MainNavigation />
        </Provider>
    )
}
