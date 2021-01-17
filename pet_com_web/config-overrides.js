//配置具体的修改规则
const {override, 
       fixBabelImports, 
       addLessLoader, 
       addWebpackAlias,
       adjustStyleLoaders
} = require('customize-cra')

const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    lessOptions:{
    javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#FF2A42',
      }
    }
  }),
  addWebpackAlias({
    '@': path.resolve('./src')
  })
)