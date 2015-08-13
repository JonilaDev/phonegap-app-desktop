function trackAppOpened() {
    if(getSendUsageFlag()) {
        var appOpened = {
            userId: getUserId(),
            platform: determineOperatingSystem(),
            debug: global.debugMode,
            version: global.pgdVersion
        };

        global.client.addEvent("appOpened", appOpened);
    }
}

function trackProjectsLoaded(count) {
    if(getSendUsageFlag()) {
        var projectsLoaded = {
            userId: getUserId(),
            platform: determineOperatingSystem(),
            debug: global.debugMode,
            version: global.pgdVersion,
            quantity: count
        };

        global.client.addEvent("projectsLoaded", projectsLoaded);
    }
}

function trackProjectCreated() {
    if(getSendUsageFlag()) {
        var projectCreated = {
            userId: getUserId(),
            platform: determineOperatingSystem(),
            debug: global.debugMode,
            version: global.pgdVersion
        };

        global.client.addEvent("projectCreated", projectCreated);
    }
}

function trackProjectOpened() {
    if(getSendUsageFlag()) {
        var projectOpened = {
            userId: getUserId(),
            platform: determineOperatingSystem(),
            debug: global.debugMode,
            version: global.pgdVersion
        };

        global.client.addEvent("projectOpened", projectOpened);
    }
}

function trackProjectRemoved() {
    if(getSendUsageFlag()) {
        var projectRemoved = {
            userId: getUserId(),
            platform: determineOperatingSystem(),
            debug: global.debugMode,
            version: global.pgdVersion
        };

        global.client.addEvent("projectRemoved", projectRemoved);
    }
}
