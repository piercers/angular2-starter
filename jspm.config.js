SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "app/": "app/"
  },
  browserConfig: {
    "baseURL": "/",
    "paths": {
    }
  },
  nodeConfig: {
    "paths": {
    }
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.6",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      },
      "npm:core-js@1.2.6": {
        "map": {
          "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "plugins": [
      "babel-plugin-transform-decorators-legacy"
    ]
  },
  map: {
    "babel": "npm:babel-core@5.8.38"
  },
  packages: {
    "app": {
      "main": "index.js",
      "format": "esm"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "@angular/common": "npm:@angular/common@2.0.0-rc.1",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
    "@angular/core": "npm:@angular/core@2.0.0-rc.1",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.1",
    "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "json": "github:systemjs/plugin-json@0.1.2",
    "lodash": "npm:lodash@4.13.1",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "reflect-metadata": "npm:reflect-metadata@0.1.3",
    "rxjs": "npm:rxjs@5.0.0-beta.6",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "zone.js": "npm:zone.js@0.6.12"
  },
  packages: {
    "npm:@angular/common@2.0.0-rc.1": {
      "map": {
        "@angular/core": "npm:@angular/core@2.0.0-rc.1"
      }
    },
    "npm:@angular/compiler@2.0.0-rc.1": {
      "map": {
        "@angular/core": "npm:@angular/core@2.0.0-rc.1"
      }
    },
    "npm:@angular/core@2.0.0-rc.1": {
      "map": {
        "rxjs": "npm:rxjs@5.0.0-beta.6",
        "zone.js": "npm:zone.js@0.6.12"
      }
    },
    "npm:@angular/platform-browser-dynamic@2.0.0-rc.1": {
      "map": {
        "@angular/common": "npm:@angular/common@2.0.0-rc.1",
        "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
        "@angular/core": "npm:@angular/core@2.0.0-rc.1",
        "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1"
      }
    },
    "npm:@angular/platform-browser@2.0.0-rc.1": {
      "map": {
        "@angular/common": "npm:@angular/common@2.0.0-rc.1",
        "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
        "@angular/core": "npm:@angular/core@2.0.0-rc.1"
      }
    },
    "npm:isarray@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:rxjs@5.0.0-beta.6": {
      "map": {}
    },
    "npm:zone.js@0.6.12": {
      "map": {}
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.7.1"
      }
    },
    "npm:buffer@4.7.1": {
      "map": {
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2"
      }
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "map": {
        "babel-template": "npm:babel-template@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0"
      }
    },
    "npm:babel-template@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.11.1",
        "babel-traverse": "npm:babel-traverse@6.11.4",
        "lodash": "npm:lodash@4.13.1",
        "babylon": "npm:babylon@6.8.4"
      }
    },
    "npm:babel-plugin-syntax-decorators@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-runtime@6.9.2": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
      }
    },
    "npm:babel-types@6.11.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-traverse": "npm:babel-traverse@6.11.4",
        "lodash": "npm:lodash@4.13.1",
        "esutils": "npm:esutils@2.0.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babel-traverse@6.11.4": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.11.1",
        "lodash": "npm:lodash@4.13.1",
        "babylon": "npm:babylon@6.8.4",
        "debug": "npm:debug@2.2.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-code-frame": "npm:babel-code-frame@6.11.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.1"
      }
    },
    "npm:babylon@6.8.4": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-code-frame@6.11.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "esutils": "npm:esutils@2.0.2",
        "chalk": "npm:chalk@1.1.3",
        "js-tokens": "npm:js-tokens@2.0.0"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.4",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "isarray": "npm:isarray@1.0.0"
      }
    }
  }
});
