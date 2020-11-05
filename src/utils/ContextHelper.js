import getConfig from "next/config"

export default class ContextHelper {
    constructor(ctx) {
        this.context = {
            device: {
                mobile: false,
                desktop: false,
                tablet: false
            },
            route: {
                link_prefix: ''
            }
        }

        this.__ctx = ctx
        this.loadContext = this.loadContext.bind(this)
        this.parseRequest = this.parseRequest.bind(this)

        this.loadContext()
    }

    getConfig() {
        const { serverRuntimeConfig } = getConfig()
        return serverRuntimeConfig
    }

    loadContext() {
        if (this.__ctx) {
            const { req } = this.__ctx
            req && this.parseRequest(req)
        }
        const config = this.getConfig()
        config && this.parseConfig(config)
    }

    parseRequest(req) {
        if (!req) return {}
        const { headers } = req
        if (headers) {
            this.context.device["mobile"] = headers["is_mobile"] && headers["is_mobile"].toLowerCase() === 'true'
            this.context.device["desktop"] = headers["is_desktop"] && headers["is_desktop"].toLowerCase() === 'true'
            this.context.device["tablet"] = headers["is_tablet"] && headers["is_tablet"].toLowerCase() === 'true'
            this.context.route["link_prefix"] = headers["path.prefix"] && headers["path.prefix"].toLowerCase()
        }
    }

    parseConfig(config) {
        const { IS_MOBILE, IS_DESKTOP, IS_TABLET, CDN_PREFIX, DEBUG } = config
        this.context.device.mobile = this.context.device.mobile || (IS_MOBILE && IS_MOBILE.toLowerCase() === 'true')
        this.context.device.desktop = this.context.device.desktop || (IS_DESKTOP && IS_DESKTOP.toLowerCase() === 'true')
        this.context.device.tablet = this.context.device.tablet || (IS_TABLET && IS_TABLET.toLowerCase() === 'true')
        this.context.DEBUG = DEBUG
        this.context.route.link_prefix = this.context.route.link_prefix || CDN_PREFIX || ''
    }
}