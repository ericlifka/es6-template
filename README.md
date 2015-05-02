# ES6 App Template

Drop in template for ES6 projects with babel and less compilation

## Dependencies

This project is node, npm, broccoli, and bower powered.

Install node via `brew` or directly from [Node.js](https://nodejs.org/).

Install bower and broccoli via npm:
```
npm install -g broccoli-cli
npm install -g bower
```

Client dependencies are managed via bower in [bower.json](bower.json)

Dev server dependencies which are mainly broccoli plugins, are managed via npm in [package.json](package.json).

## Getting Started

Launch a development server:
```
broccoli serve
```

Create a distributable build in `dist`:
```
broccoli build dist
```

## License

Licensed under the [MIT License](LICENSE)
