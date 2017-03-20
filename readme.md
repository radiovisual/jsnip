# jsnip [![Build Status](https://travis-ci.org/radiovisual/jsnip.svg?branch=master)](https://travis-ci.org/radiovisual/jsnip)

> Get common JavaScript code snippets.

:hamburger: This is my WIP snippet library where you can get customizable JS
code snippets from within your node applications.

**Note:** The React snippets are currently in a React Native flavor and the
JavaScript is intended to reflect the ES2015 (ES6) syntax.

If you want to get snippets from the command line, check out [jsnip-cli](https://github.com/radiovisual/jsnip-cli).

## Install

```
$ npm install --save jsnip
```


## Usage

Or from Node.js:

```js
const jsnip = require('jsnip');
jsnip('reducer', { name: 'MyAwesomeClass' });
```

## API

### jsnip(input, [options])

#### input

Type: `string`

The name of the code snippet you want to print. Click the link to see the actual
snippet file.

| input | Description |
| ------| -----------|
| [function](snippets/react-function.js)   | A functional React component. |
| [class](snippets/react-class.js)         | A class-based React component. |
| [action](snippets/redux-actions.js)      | A Redux action snippet. |
| [reducer](snippets/redux-reducer.js)     | A Redux reducer snippet. |
| [lorem](snippets/lorem.txt)              | 3 paragraphs of lorem ipsum text. |
| [reduxclass](snippets/redux-class.js)              | A connected (Redux) React class-based component. |

#### options

Type: `object`  

Possible options are:

|  | Type | Default | Description |
| ----- | ----- | ----- | ----- |
| `name`      | `string` | `'ClassName'` | Specify the function or class name to use in the output |


## Contribution

Currently this module is for my own productivity, so I won't be accepting Pull
Requests that try to impose specific styles or opinions. However I will accept Pull
Requests that aim to populate the snippet library with useful goodies. :hamburger:

## Related

- [jsnip-cli](https://github.com/radiovisual/jsnip-cli) Get these snippets from the command line; Optionally copy to the clipboard.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
