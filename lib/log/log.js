
var logConfig = {
    trace : {
        isAll : true
    },
    debug : {
        isAll : true
    },
    info : {
        isAll : true
    },
    warn : {
        isAll : true
    },
    error : {
        isAll : true
    },
    fatal : {
        isAll : true
    },
    all : {
        format : '[yyyyMMdd hh:mm:ss.Z] {{title}} {{content}} {{time}}} {{memo}}',
        color : '#0000FF'
    }
};

var log = {
    trace : function() {
        // 로그추적
    },
    debug : function() {
        // 디버깅
    },
    info : function() {
        // 정보
    },
    warn : function() {
        // 경고
    },
    error : function() {
        // 오류
    },
    fatal : function() {
        // 치명적인 오류
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