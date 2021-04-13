/**
 * @type {import('vite').UserConfig}
 */

 const { resolve } = require('path')

 const config = {
   build: {
     rollupOptions: {
       input: {
         main: resolve('src-vite', 'index.html'),
       }
     }
   }
 }
 
 export default config
 