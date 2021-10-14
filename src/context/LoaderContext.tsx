import { createContext, useReducer } from 'react';
import { loaderReducer } from './LoaderReducer';

// export const LoadingContext = createContext();

const LoaderContext = (props: any) => {
    const [status, dispatch] = useReducer(loaderReducer, []);

    return (
        // <LoadingContext.Provider value={{ status, dispatch }}>
        //     { props.children}
        // </LoadingContext.Provider>
        <h1>hello</h1>
    )

}

export default LoaderContext;