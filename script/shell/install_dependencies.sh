#!/bin/bash
cd ../../
webpackList=(
  webpack
  webpack-dev-server
  webpack-merge
)
babelList=(
  @babel/core
  @babel/register
  @babel/plugin-proposal-class-properties
  @babel/plugin-proposal-decorators
  @babel/plugin-proposal-logical-assignment-operators
  @babel/plugin-syntax-dynamic-import
  @babel/plugin-transform-async-to-generator
  @babel/plugin-transform-object-assign
  @babel/plugin-transform-runtime
  @babel/preset-env
  @babel/preset-react
  @babel/preset-stage-0
  @babel/runtime)
loaderList=(
  babel-loader
  css-loader
  file-loader
  postcss-loader
  raw-loader
  sass-loader
  style-loader
  ts-loader
  url-loader
)
pluginList=(
  copy-webpack-plugin
  html-webpack-plugin
  tsconfig-paths-webpack-plugin)

otherList=(
  autoprefixer
  commander
  del
  node-sass
  typescript
)
installDevDependencies() {
  devDependencies=("${webpackList[*]} ${babelList[*]} ${loaderList[*]} ${pluginList[*]} ${otherList[*]}")
  echo "installing ${devDependencies[*]}"
  yarn add ${devDependencies[*]} --dev
}
installDevDependencies

#for (( i = 0; i < ${#devDependencies[@]}; i++ )); do
#  dependenciesList="${devDependencies} ${devDependencies[i]}"
#done
#echo "$dependenciesList"
