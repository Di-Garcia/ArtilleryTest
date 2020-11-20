module.exports = {
    getResponseBody: getResponseBody,
    getRandomImagePath: getRandomImagePath,
    getSampleNumber: getSampleNumber,
    generateDate: generateDate,
    getRandomGroupId: getRandomGroupId,
    getMessageParams: getMessageParams
};


function getResponseBody(requestParams, response, context, ee, next) {
    context.vars.responseBody = response.body;
    return next();
}

function getMessageParams(userContext, events, next) {
    const types = [ 'bat-available-percentage', 'bat-capacity', 'bat-current-average', 'bat-current-now', 'bat-ischarging', 'cpu-iowait-used', 'cpu-nice-used', 'cpu-system-used', 'cpu-total-used', 'cpu-user-used', 'disk-available-bytes', 'disk-available-percentage', 'disk-usage-bytes', 'disk-usage-percentage', 'heart-hate-status', 'ram-app-used-bytes', 'ram-used-bytes', 'screen-brightness-percentage', 'time-drift'];
    function randomValue(max) {
        return (Math.random() * (max));
    }
    const parameters = (types) => {
        const out = types.map(item => {
            return {
                type: item,
                value: randomValue(9999),
                ts: Date.now()
            };
        });

        return out;
    };

    const out = (parameters) => {
        return {
            message_type: 'params',
            device_id: userContext.vars.device_id,
            parameters: parameters
        };
    };

    userContext.vars.json_body = out(parameters(types));
    return next();

}

function getRandomImagePath(userContext, events, done) {
    const urls = [
        'http://address:PORT/fs/files/protocol-manager/EXAMPLE.png'
    ];

    userContext.vars.image_path = urls[0];
    return done();
}

function getSampleNumber(userContext, events, done) {
    const idNum = userContext.vars.sample_number;
    userContext.vars.sample_number = 'SN' + idNum;
    return done();
}

function getRandomGroupId(userContext, events, next) {

    const possibleGroups = (i) => {
        const vec = [
            'neverPicked',
            'AW5',
            'AW6',
            'BIKE',
            'GW3',
            'GWA2',
            'IP',
            'K5',
            'PH10',
            'PM1',
            'PM2',
            'PM3',
            'PM4',
            'PM5',
            'POH1',
            'TML' ];
        
        return vec[i];
    };

    const randomNumberBeetween = (min, max) => {
        return Math.floor(
            Math.random() * (max - min) + min
        );
    };

    userContext.vars.group_name = possibleGroups(randomNumberBeetween(1,15));
    return next();

}

function generateDate(userContext, events, done) {
    var day = new Date();
    var nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);

    var random_start_date = nextDay.toJSON().slice(0,10).replace(/-/g,'-');

    nextDay.setDate(day.getDate() + 1 + Math.floor(Math.random() * 10));
    var random_end_date = nextDay.toJSON().slice(0,10).replace(/-/g,'-');

    userContext.vars.start_date = random_start_date.toString();
    userContext.vars.end_date = random_end_date.toString();
    return done();
}
