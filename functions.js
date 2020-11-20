module.exports = {
    getResponseBody: getResponseBody,
    generateRandomId: generateRandomId,
    generateRandomName: generateRandomName,
    generateRandomNewName: generateRandomNewName,
    generateRandomNewValueWithRegex: generateRandomNewValueWithRegex,
    generateRandomGroupId: generateRandomGroupId,
    getRoutineBody: getRoutineBody,
    updatedRoutineBody: updatedRoutineBody,
    getRotineDailyScheduleBody: getRotineDailyScheduleBody,
    getRotineWeeklyScheduleBody: getRotineWeeklyScheduleBody,
    getUpdatedRotineDailyScheduleBody: getUpdatedRotineDailyScheduleBody,
    getRotineDailyScheduleBodyGroup: getRotineDailyScheduleBodyGroup,
    getRotineWeeklyScheduleBodyGroup: getRotineWeeklyScheduleBodyGroup,
    getRotineScheduleIncompleteBody: getRotineScheduleIncompleteBody
    
};

function getResponseBody(requestParams, response, context, ee, next) {
    context.vars.responseBody = response.body;
    return next();
}

function generateRandomId(userContext, events, done) {

    const randomNumberBeetween = (min, max) => {
        return Math.floor(
            Math.random() * (max - min) + min
        );
    };

    userContext.vars.id = randomNumberBeetween(1000, 99999);
    return done();
}

function generateRandomGroupId(userContext, events, next) {

    const randomNumberBeetween = (min, max) => {
        return Math.floor(
            Math.random() * (max - min) + min
        );
    };

    userContext.vars.id = ('artillery_test_group_'+randomNumberBeetween(1, 9999));
    return next();
}

function generateRandomName(userContext, events, done) {
    const randomNumberBeetween = (min, max) => {
        return Math.floor(
            Math.random() * (max - min) + min
        );
    };

    userContext.vars.name = 'artilleryMetadata_' + randomNumberBeetween(1000, 9999);
    return done();
}

function generateRandomNewName(userContext, events, done) {
    const random_password = Math.floor(1000000 + Math.random() * 9000000);

    userContext.vars.newname = userContext.vars.newname + random_password.toString();
    return done();
}

function generateRandomNewValueWithRegex(userContext, events, done) {
    const random_password = Math.floor(1000000 + Math.random() * 9000000);
    let value = userContext.vars.regex;

    userContext.vars.value = value.substring(1) + random_password.toString();
    return done();
}

function updatedRoutineBody(userContext, events, next) {
    const out = () => {
        return {
            description: 'UPDATED description test',
            routine: {
                functions: [
                    {
                        args: [
                            {
                                label: 'UPDATED protocol_source',
                                value: 'http'
                            },
                            {
                                label: 'UPDATED address_source',
                                value: '/path/to/source'
                            },
                            {
                                label: 'UPDATED protocol_target',
                                value: 'localfs'
                            },
                            {
                                label: 'UPDATED address_target',
                                value: '/path/to/target'
                            }
                        ],
                        function_type: 'pull'
                    }
                ]
            }
        };
    };
    userContext.vars.routineUpdatedBody = out();
    next();
}

function getRoutineBody(userContext, events, next) {

    const randomNumberBeetween = (min, max) => {
        return Math.floor(
            Math.random() * (max - min) + min
        );
    };
    const randNum = randomNumberBeetween(300,999);
    const out = () => {
        return {
            description: 'description test ' + randNum,
            routine: {
                functions: [
                    {
                        args: [
                            {
                                label: 'protocol_source',
                                value: 'http'
                            },
                            {
                                label: 'address_source',
                                value: '/path/to/source'
                            },
                            {
                                label: 'protocol_target',
                                value: 'localfs'
                            },
                            {
                                label: 'address_target',
                                value: '/path/to/target'
                            }
                        ],
                        function_type: 'pull'
                    }
                ]
            },
            active: true
        };
    };
    userContext.vars.randNum = randNum;
    userContext.vars.routineBody = out();
    next();
}

function getRotineDailyScheduleBody(userContext, events, next) {
    const currentDate = new Date();
    const startDate = currentDate.toISOString().split('T')[0];
    const endDate = new Date(currentDate.getTime() + (365 * 24 * 3600 * 1000)).toISOString().split('T')[0];
    const scheduleTime = new Date(currentDate.getTime() + (30 * 60 * 1000)).toISOString().split('T')[1].split('.')[0];

    const out = () => {
        return {
            device_id: userContext.vars.deviceIdPost,
            routine_id: userContext.vars.routineIdPost,
            start_date: startDate,
            end_date: endDate,
            schedule_time: scheduleTime,
            duration: '00:30:00',
            repeat: 'Daily',
            retries: 5
        };
    };
    
    userContext.vars.bindRoutineBody = out();
    next();
}

function getRotineDailyScheduleBodyGroup(userContext, events, next) {
    const currentDate = new Date();
    const startDate = currentDate.toISOString().split('T')[0];
    const endDate = new Date(currentDate.getTime() + (365 * 24 * 3600 * 1000)).toISOString().split('T')[0];
    const scheduleTime = new Date(currentDate.getTime() + (30 * 60 * 1000)).toISOString().split('T')[1].split('.')[0];

    const out = () => {
        return {
            group_id: userContext.vars.groupIdPost,
            routine_id: userContext.vars.routineIdPost,
            start_date: startDate,
            end_date: endDate,
            schedule_time: scheduleTime,
            duration: '00:30:00',
            repeat: 'Daily',
            retries: 5
        };
    };
    
    userContext.vars.bindRoutineBody = out();
    next();
}

function getRotineWeeklyScheduleBody(userContext, events, next) {

    const currentDate = new Date();
    const startDate = currentDate.toISOString().split('T')[0];
    const endDate = new Date(currentDate.getTime() + (365 * 24 * 3600 * 1000)).toISOString().split('T')[0];
    const scheduleTime = new Date(currentDate.getTime() + (30 * 60 * 1000)).toISOString().split('T')[1].split('.')[0];

    const out = () => {
        return {
            device_id: userContext.vars.deviceIdPost,
            routine_id: userContext.vars.routineIdPost,
            schedule_weekday: [ 'Wed', 'Thu' ],
            start_date: startDate,
            end_date: endDate,
            schedule_time: scheduleTime,
            duration: '00:35:00',
            repeat: 'Weekly',
            retries: 5
        };
    };
    
    userContext.vars.bindRoutineBody = out();
    next();
}

function getRotineWeeklyScheduleBodyGroup(userContext, events, next) {

    const currentDate = new Date();
    const startDate = currentDate.toISOString().split('T')[0];
    const endDate = new Date(currentDate.getTime() + (365 * 24 * 3600 * 1000)).toISOString().split('T')[0];
    const scheduleTime = new Date(currentDate.getTime() + (30 * 60 * 1000)).toISOString().split('T')[1].split('.')[0];

    const out = () => {
        return {
            group_id: userContext.vars.groupIdPost,
            routine_id: userContext.vars.routineIdPost,
            schedule_weekday: [ 'Wed', 'Thu' ],
            start_date: startDate,
            end_date: endDate,
            schedule_time: scheduleTime,
            duration: '00:35:00',
            repeat: 'Weekly',
            retries: 5
        };
    };
    
    userContext.vars.bindRoutineBody = out();
    next();
}

function getUpdatedRotineDailyScheduleBody(userContext, events, next) {
    const currentDate = new Date();
    const startDate = currentDate.toISOString().split('T')[0];
    const endDate = new Date(currentDate.getTime() + (2 * 365 * 24 * 3600 * 1000)).toISOString().split('T')[0];
    const scheduleTime = new Date(currentDate.getTime() + (30 * 60 * 1000)).toISOString().split('T')[1].split('.')[0];

    const out = () => {
        return {
            routine_id: userContext.vars.routineIdPost,
            start_date: startDate,
            end_date: endDate,
            schedule_time: scheduleTime,
            duration: '00:10:00',
            repeat: 'Daily',
            retries: 5
        };
    };
    
    userContext.vars.bindRoutineBody = out();
    next();
}

function getRotineScheduleIncompleteBody(userContext, events, next) {
    const currentDate = new Date();
    const startDate = currentDate.toISOString().split('T')[0];
    const endDate = new Date(currentDate.getTime() + (365 * 24 * 3600 * 1000)).toISOString().split('T')[0];
    const scheduleTime = new Date(currentDate.getTime() + (30 * 60 * 1000)).toISOString().split('T')[1].split('.')[0];

    const out = () => {
        return {
            start_date: startDate,
            end_date: endDate,
            schedule_time: scheduleTime,
            duration: '00:30:00',
            repeat: 'Daily',
            retries: 5
        };
    };
    
    userContext.vars.bindRoutineBody = out();
    next();
}