import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {StateProvider} from './Context'

function ErrorFallback({error, componentStack, resetErrorBoundary}) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <pre>{componentStack}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

export default () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <StateProvider>
                <div>Hello, World!</div>
            </StateProvider>
        </ErrorBoundary>

    )
}
