# Angular2 Starter
A ready-to-go starter project for Angular2 apps using ES6/7+ through Babel and module loading using JSPM. Completely TypeScript-less, yet very syntactically similar which means official Angular examples can be translated with little to no changes.

`git clone https://github.com/piercers/angular2-starter.git`

`npm install`

`npm start`

Includes Angular examples of:
- Child components
- The Async and JSON pipes
- Data flow between components
- Events
- RxJS integration

## Hot Reloading
To enable hot reloading of this project:

1. `jspm install --dev systemjs-hot-reloader`
2. Add to top of index.js: `import 'systemjs-hot-reloader/default-listener.js';`
3. Add `trace: true` to the `browserConfig` entry inside of `jspm/config.js`.
4. `npm install -g chokidar-socket-emitter` and run `chokidar-socket-emitter`.
5. `npm run start-hot`

This creates a JSPM bundle of your files which means your code is no longer served directly from your source files. To undo this process, run `jspm unbundle` and restart the project with `npm start`.

While developing with the hot reloader, each time you refresh your browser, the code that gets loaded is from the point at which you ran `npm run start-hot`. When you save a file, the `chokidar-socket-emitter` injects all new code into the browser which means you might need to save a file after refreshing so you get your latest code.
