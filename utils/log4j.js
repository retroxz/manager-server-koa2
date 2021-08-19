const log4js = require('log4js')

const levels = {
    trace: log4js.levels.TRACE,
    debug: log4js.levels.DEBUG,
    info: log4js.levels.INFO,
    warn: log4js.levels.WARN,
    error: log4js.levels.ERROR,
    fatal: log4js.levels.FATAL
}

log4js.configure({
    appenders: {
        console: {type: 'console'}
    },
    categories: {
        default: {appenders: ['out', 'app'], level: 'debug'}
    }
})

/**
 * 日志输出 级别debug
 * @param {String} content
 */
exports.debug = content=> {
    let logger = log4js.getLogger()
    logger.level = this.levels.debug
    logger.debug(content)
}

/**
 * 日志输出 级别debug
 * @param {String} content
 */
exports.error = content=> {
    let logger = log4js.getLogger()
    logger.level = this.levels.error
    logger.error(content)
}
