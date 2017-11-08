import { createStore } from 'redux'
import rootRedux from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(rootRedux, initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}
