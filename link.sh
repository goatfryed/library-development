#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# link library folders
cd "$DIR"/webpack-author-libraries && npm link

# link libraries to consumers
cd "$DIR"/react-app-consumer && npm run link