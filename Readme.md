# Portafolio

Mi experiencia en el desarollo de web.

# Dependencias de Desarrollo

    "@babel/preset-env": "^7.7.7",
    "@babel/preset-react": "^7.7.4",
    "@babel/runtime": "^7.7.7",
    "

- npm install webpack --save-dev --save-exact
- npm install webpack-cli -D -E
- npm i -D css-loader style-loader
- npm install mini-css-extract-plugin
- npm install html-webpack-plugin
- npm install -D babel-loader @babel/core @babel/plugin-proposal-class-properties
  @babel/plugin-transform-runtime @babel/preset-env
  @babel/preset-react
- npm install -S @babel/runtime
- npm i -D clean-webpack-plugin terser-webpack-plugin optimize-css-assets-webpack-plugin

# Multiple ssh key

```bash
=======
ssh-copy-id -i ~/.ssh/heroblack hackchan@192.168.18.22
ssh-keygen -f ~/.ssh/heroblack -t rsa -b 4096 -C “inge.fabio.rojas@gmail.com”

ssh-keygen -f ~/.ssh/hackchan -t rsa -b 4096 -C “fabiorojas7@gmail.com”

eval `ssh-agent -s`
#adiciona una entrada de ssh-agent
ssh-add heroblack
ssh-add ~/.ssh/hackchan
#lista una entrada de ssh-agent
ssh-add -l
#elimina todas las entradas de ssh-agent
ssh-add -D
#clonando repositorios
git clone git@heroblack:heroblack/repo_name.git
git clone git@hackchan:hackchan/repo_name.git

#local repo
git remote set-url origin git@hackchan:hackchan/repo_name.git
#remoto
git remote add origin git@hackchan:hackchan/repo_name.git
```
#REACT
