#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# link library folders
cd "$DIR"/webpack-author-libraries && npm link
cd "$DIR"/webpack-react-lib && npm link

# link libraries to consumers
cd "$DIR"/react-app-consumer && npm run link
cd "$DIR"/plain-webpack-consumer && npm run link
cd "$DIR"/nosymlink-webpack-consumer && npm run link