// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'umd',
    name: 'bundle',
  },
  name: 'bundle',
  plugins: [
    resolve({
      
    })
  ]
};
