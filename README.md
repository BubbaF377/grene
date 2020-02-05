# Grēne: grene-gardening-app

## Purpose
The purpose of Grēne is two-fold:
1. Build a full stack app from the ground up to to cement some newly acquired skills, while honing existing ones.
2. Create a useful gardening app for personal use and - possibly, eventually - release to the general public.

## Stack
Rather than start off with package like create-react-app, I want to build this project from the ground up, including all the installs, webpack setup, etc. Granted, its not the most efficient way to start, but this choice helps me fulfill Purpose #1. 

Starting out, I plan on using the following technologies. As I move through development, my needs or opinions might change, at which point I will update this list with the new tech and my reasoning for including it. I should point out that this is very much an exercise in digging into backend technologies and some of it will be learn-as-I-go. 

- React
- Redux
- Typescript
- Material UI
- Node / Express
- GraphQL?
- Firebase or MongoDB?

## Development Process
As I'm more comfortable in the front end, I'm going to scaffold that part of the project first. Backend development will take place in the second phase. Following is a running doc of my dev steps:

1. Create directory
2. git init
3. Clone repository
4. npm init
5. Create .gitignore file
  - add 'node_modules'
6. Set up webpak with the following installs:
  - webpack
  - npm webpack-dev-server
7. Set up babel with the following installs:
  - npm @babel/core
  - npm @babel/node
  - npm @babel/preset-env
  - npm @babel/preset-react
  - npm @babel/register
  - npm babel-loader
8. create .babelrc file
  - babel presets
9. Create webpack.config.js
10. Update .gitignore
  - dist
11. Create stubs for index.js and index.html
12. Set up Typescript
  - npm typescript
12. Set up redux
  - npm redux
  - create defaultState file
  - add redux store
13. Set up React
  - npm react
  - npm react-dom
  - npm react-redux

## Why Grēne?
Along with being a developer, I also have a degree in English. I've always been fascinated with the Germanic roots of the language, and with the infusion of Latin influence via the French brought by [William the Conquer](https://en.wikipedia.org/wiki/William_the_Conqueror)'s court after his successful invasion of the British Isles in 1066. Grēne is the Old English precursor to our word "green," and has its roots (pun intended) in Northern European languages. So, yeah. I called it Grēne because I'm a nerd. Go figure.

## License
This really is a personal educational project, at heart. I'm not looking for collaboration, at this point, though my thoughts could certainly change over time. Given this, I'm licensing the project under the strong copyleft [GNU Affero General Public License v3.0](https://opensource.org/licenses/AGPL-3.0). I figure I can replace this with one less restrictive later on if it looks like that might be the right decision.

