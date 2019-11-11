import { Route } from 'vue-router'
export function scrollBehavior(to: Route, from: Route, savedPosition: void | { x: number, y: number }) {
    if (savedPosition) {
        return savedPosition
    } else {
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    }
}
