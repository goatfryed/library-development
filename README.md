This is a educational project to explore development of javascript libraries.

The project originated from a lib development, where i wanted to link a package i'm working on to a small demo app.
Turns out i just didn't find [webpack#811](https://github.com/webpack/webpack/issues/811) fast enough.

plain-webpack-consumer fails, if the peer dependencies are not installed in the library project.
react-app-consumer initialized with create-react-app seems to handle these cases just fine.
As described in the issue, the consumer config must be fixed in case of npm link.

#### Next Steps ####
write a lib with rollup