export type buildMode = 'production' | 'development'

export interface buildEnv {
    port: number,
    mode: buildMode,
    analyze: boolean
}

export interface buildPaths {
    entry: string,
    build: string,
    html: string
    src: string
}

export interface buildOptions {
    mode: buildMode,
    paths: buildPaths,
    isDev: boolean
    analyze: boolean,
    port: number
}
