# Bishwendu Kundu - Malana 3 Blog

✨ Built with ReactJs, React-Router and TailwindCSS(JIT) ✨

## Email

bishwenduk029@gmail.com

## Features

- Display blogs
- Open Each Blog in the blog list.
- Optimistic UI updates when creating, editing and deleting blogs.
- Dark mode and Light mode themes available for the blog.
- Create new blog
- Update a blog
- Delete blog

## Architecture

React-Context available in React is actually used to inject any dependency in a particular sub-tree of react components.
Just injecting dependency helps avoid prop drilling. Now I have tried combining this with useReducer to manage the state of application myself. Since the state was moderately complex so this design pattern worked.

For more complex states, it is always better to use state management solutions available out there.

### Run Application Locally

I have shared the plain js, css and html files generated as a part of building a normal react project.
So following should help

```
npm install -g serve
```

```
cd <Into-Folder-I-Shared>
serve
```

### Tested on Browsers

1.) Chrome
2.) Firefox

### Development

In GitHub I have uploaded the source code of the project. As I was using some transpiling for JSX so I preferred to develop in a seperate
environment.

Also I could have used unpkg CDN to load babel, ReactJs and TailwindCSS directly into plain html and developed. But to save time followed other route.

Source code is available at https://github.com/bishwenduk029/malana3

1.) Clone source code

```
git clone https://github.com/bishwenduk029/malana3
cd malana3
yarn install
yarn dev
```

### Production

Run `yarn build`. The generated files will be on the `dist` folder. This is the folder I have shared.

### Challenges

1.) Due less time missed handling loaders and failure scenarios.
