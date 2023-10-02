
export type BuildMode = 'production' | 'development'

export interface IBuildPaths {
    entry: string
    dist: string
    html: string
}

export interface BuildEnv {
    mode: BuildMode
    port: number
}

export interface BuildOptions {
    mode: BuildMode,
    paths: IBuildPaths,
    isDev: boolean
    port: number
}