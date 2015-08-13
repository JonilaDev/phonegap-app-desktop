function toggleServerStatus(projDir) {
    if (global.isServerRunning) {
        // if server is currently running, stop it before opening a new server instance
        setServerOffline();
    }

    if (projDir.length > 0) {
        localStorage.projDir = projDir;
    } else {
        if (projDir.length <= 0) {
            projDir = localStorage.projDir;
        }
    }

    fs.exists(projDir + buildPathBasedOnOS("/www"), function(exists) {
        if (exists) {
            process.chdir(projDir);

            global.pgServer.listen({ port: localStorage.portNumber })
            .on("complete", function(data) {
                global.server = data.server;
                global.isServerRunning = true;
                serverOnlineState(data);

                widgetServerOnlineState(global.activeWidget.projectId);

                global.jQuery("#log").prop("disabled", false);
            })
            .on("error", function(e) {
                console.log(e.message);
                global.jQuery("#server-status-label").text(e.message);

                global.jQuery("#status-field").css("background-color", "rgb(153,153,153)");
                widgetSeverOfflineState(global.activeWidget.projectId);

            })
            .on("log", function(status, url) {
                global.jQuery("#serverLog").append(status + " " + url + "\n");
            });
        } else {
            var errMsg = "an existing project doesn't exist in this folder";
            console.log(errMsg);
            global.jQuery("#server-status").prop("checked", false);
            global.jQuery("#log").prop("disabled", true);
        }
    });
}

function setServerOffline() {
    global.server.close();
    global.isServerRunning = false;
}

function serverOfflineState() {
    global.jQuery("#status-field").css("background-color", "rgb(153,153,153)");
    global.jQuery("#server-status-label").text("Server is offline");
    global.jQuery("#status-field").show();
}

function serverOnlineState(data) {
    global.jQuery("#status-field").show();
    global.jQuery("#status-field").css("background-color", "rgb(43,169,77)");
    global.jQuery("#server-status-label").text("Server is running on http://" + data.address + ":" + data.port);
    global.jQuery("#settings-ip").text(data.address + ":");
}
