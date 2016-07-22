var colors = require('colors');
var moment = require('moment');
moment.locale('ko');

var logConfig = {
    log : {
        isAll : true,
        time : 'LLLL',
        format : '[{{time}}] {{title}} {{content}} {{memo}}',
        color : 'grey'
    },
    trace : {
        isAll : true,
        time : 'LLLL',
        format : '[{{time}}] {{title}} {{content}} {{memo}}',
        color : 'bgMagenta'
    },
    debug : {
        isAll : true,
        time : 'LLLL',
        format : '[{{time}}] {{title}} {{content}} {{memo}}',
        color : 'cyan'
    },
    info : {
        isAll : true,
        time : 'LLLL',
        format : '[{{time}}] {{title}} {{content}} {{memo}}',
        color : 'green'
    },
    warn : {
        isAll : true,
        time : 'LLLL',
        format : '[{{time}}] {{title}} {{content}} {{memo}}',
        color : 'yellow'
    },
    error : {
        isAll : true,
        time : 'LLLL',
        format : '[{{time}}] {{title}} {{content}} {{memo}}',
        color : 'red'
    },
    fatal : {
        isAll : true,
        time : 'LLLL',
        format : '[{{time}}] {{title}} {{content}} {{memo}}',
        color : 'bgRed'
    },
    all : {
        time : 'LLLL',
        format : '[{{time}}] {{title}} {{content}} {{memo}}',
        color : 'grey'
    }
};

colors.setTheme({
    trace : logConfig.trace.color,
    debug : logConfig.debug.color,
    info : logConfig.info.color,
    warn : logConfig.warn.color,
    error : logConfig.error.color,
    fatal : logConfig.fatal.color,
    all : logConfig.all.color
});

function printLog(type, data) {

    if(typeof data == 'string') {
        console.log(logConfig[type].format.replace('{{time}}', `[${moment().format('LLLL')}]`).replace('{{content}}', data)[type]);
        return;
    }

    if(!data.date) {
        data.date = new Date();
    }

    var printText = logConfig[type].format
        .replace('{{time}}', moment(data.date).format(logConfig[type].time))
        .replace('{{title}}', data.title || '')
        .replace('{{content}}', data.text || '')
        .replace('{{memo}}', data.memo || '');

    console.log(printText[type]);

}

var log = {
    log : (data) => printLog('log', data),
    trace : (data) => printLog('trace', data),
    debug : (data) => printLog('debug', data),
    info : (data) => printLog('info', data),
    warn : (data) => printLog('warn', data),
    error : (data) => printLog('error', data),
    fatal : (data) => printLog('fatal', data),

    option : function(data) {

        if(data.format) {

        }

        if(data.type) {

            switch (data.type) {
                case 'trace' :
                    break;
                case 'debug' :
                    break;
                case 'info' :
                    break;
                case 'warn' :
                    break;
                case 'error' :
                    break;
                case 'fatal' :
                    break;
                case 'all' :
                    break;
                default :
                    break;
            }

        }


    }
};



module.exports = log;