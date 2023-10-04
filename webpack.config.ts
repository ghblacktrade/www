
import webpack
    from 'webpack'
import {
    buildWebpackConfig
} from "./config/build/buildWebpackConfig";
import {
    BuildEnv,
    IBuildPaths
} from "./config/build/types/config";
import path
    from "path";


const paths: IBuildPaths = {
    entry:  path.resolve(__dirname, 'src', 'index.tsx'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
}

const mode = 'development'
const isDev = mode === 'development'
const PORT = 3000

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev,
    port: PORT
})

export default (env: BuildEnv) => {

    const paths: IBuildPaths = {
        entry:  path.resolve(__dirname, 'src', 'index.tsx'),
        dist: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode = env.mode || 'development'
    const PORT = env.port || 3000

    const isDev = mode === 'development'

    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths,
        isDev,
        port: PORT
    })

    return config
}

