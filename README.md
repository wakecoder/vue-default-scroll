# vue-default-scroll
Provides reasonable default scroll behavior for the vue-rouiter

## What does it do?
By default, the vue-router doesn't scroll to the top of a page when you navigate. This package does the following:
- Scrolls to the top when navigating to a new page when navigating for the first time
- Scrolls to a saved position if navigating back
- Scrolls to the appropriate anchor when navigating to a URL with a hash.

## How do I use it?

#### NOTE: Your project must use webpack or another bundler that supports es modules (e.g. use the vue-cli)

1. In a shell / command line:
``` 
yarn add vue-default-scroll
```

2. In your project
```
import Router from 'vue-router'
import {scrollBehavior} from 'vue-default-scroll'
Vue.use(Router);

export default new Router({
  scrollBehavior,
  mode: 'history'
}
```
