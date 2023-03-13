import { babel } from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";
import image from 'rollup-plugin-img';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import resolve from '@rollup/plugin-node-resolve';


export default {
    input: 'src/index.js',
    output: {
        file: 'build/bundle.js',
        format: 'cjs'
    },
    watch: {
        exclude: 'node_modules/**'
    },
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        resolve(),
        styles(),
        image({
            limit: 100000
        }),
        serve({
            open: true,
            contentBase: './',
            port: '8000'
        }),
        livereload()
    ]

}