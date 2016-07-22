var colors = require('colors');

var logConfig = {
    trace : {
        isAll : true,
        color : 'grey'
    },
    debug : {
        isAll : true,
        color : 'cyan'
    },
    info : {
        isAll : true,
        color : 'green'
    },
    warn : {
        isAll : true,
        color : 'yellow'
    },
    error : {
        isAll : true,
        color : 'red'
    },
    fatal : {
        isAll : true,
        color : 'white'
    },
    all : {
        format : '[yyyyMMdd hh:mm:ss.Z] {{title}} {{content}} {{time}}} {{memo}}',
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

var log = {
    trace : function(text) {
        // 로그추적
        console.log(text.trace);
    },
    debug : function(text) {
        // 디버깅
        console.log(text.debug);
    },
    info : function(text) {
        // 정보
        console.log(text.info);
    },
    warn : function(text) {
        // 경고
        console.log(text.warn);
    },
    error : function(text) {
        // 오류
        console.log(text.error);
    },
    fatal : function(text) {
        // 치명적인 오류
        console.log(text.bgRed.fatal);
    },

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