const { ipcMain } = require("electron");

module.exports = (win, getClient) => {
    // asyncSetCurrentProject wrapper
    const asyncSetCurrentProject = (params) => {
        return new Promise((resolve, reject) => {
            getClient().SetCurrentProject(params, (err, data) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
        })
    }
    ipcMain.handle("SetCurrentProject", async (e, params) => {
        return await asyncSetCurrentProject(params)
    })

    // asyncGetCurrentProject wrapper
    const asyncGetCurrentProjectEx = (params) => {
        return new Promise((resolve, reject) => {
            getClient().GetCurrentProjectEx(params, (err, data) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
        })
    }
    ipcMain.handle("GetCurrentProjectEx", async (e, params) => {
        return await asyncGetCurrentProjectEx(params)
    })

    // asyncGetProjects wrapper
    const asyncGetProjects = (params) => {
        return new Promise((resolve, reject) => {
            getClient().GetProjects(params, (err, data) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
        })
    }
    ipcMain.handle("GetProjects", async (e, params) => {
        return await asyncGetProjects(params)
    })

    // asyncNewProject wrapper
    const asyncNewProject = (params) => {
        return new Promise((resolve, reject) => {
            getClient().NewProject(params, (err, data) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
        })
    }
    ipcMain.handle("NewProject", async (e, params) => {
        return await asyncNewProject(params)
    })

    // asyncUpdateProject wrapper
    const asyncUpdateProject = (params) => {
        return new Promise((resolve, reject) => {
            getClient().UpdateProject(params, (err, data) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
        })
    }
    ipcMain.handle("UpdateProject", async (e, params) => {
        return await asyncUpdateProject(params)
    })

    // asyncIsProjectNameValid wrapper
    const asyncIsProjectNameValid = (params) => {
        return new Promise((resolve, reject) => {
            getClient().IsProjectNameValid(params, (err, data) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
        })
    }
    ipcMain.handle("IsProjectNameValid", async (e, params) => {
        return await asyncIsProjectNameValid(params)
    })

    // asyncRemoveProject wrapper
    const asyncRemoveProject = (params) => {
        return new Promise((resolve, reject) => {
            getClient().RemoveProject(params, (err, data) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
        })
    }
    ipcMain.handle("RemoveProject", async (e, params) => {
        return await asyncRemoveProject(params)
    })

    // asyncDeleteProject wrapper
    const asyncDeleteProject = (params) => {
        return new Promise((resolve, reject) => {
            getClient().DeleteProject(params, (err, data) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
        })
    }
    ipcMain.handle("DeleteProject", async (e, params) => {
        return await asyncDeleteProject(params)
    })

    // asyncGetDefaultProjectEx wrapper
    const asyncGetDefaultProjectEx = (params) => {
        return new Promise((resolve, reject) => {
            getClient().GetDefaultProjectEx(params, (err, data) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
        })
    }
    ipcMain.handle("GetDefaultProjectEx", async (e, params) => {
        return await asyncGetDefaultProjectEx(params)
    })

    const asyncGetTemporaryProjectEx = (params) => {
        return new Promise((resolve, reject) => {
            getClient().GetTemporaryProjectEx(params, (err, data) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
        })
    }
    ipcMain.handle("GetTemporaryProjectEx", async (e, params) => {
        return await asyncGetTemporaryProjectEx(params)
    })

    const handlerHelper = require("./handleStreamWithContext")

    const streamExportProjectMap = new Map();
    ipcMain.handle("cancel-ExportProject", handlerHelper.cancelHandler(streamExportProjectMap));
    ipcMain.handle("ExportProject", (e, params, token) => {
        let stream = getClient().ExportProject(params);
        handlerHelper.registerHandler(win, stream, streamExportProjectMap, token)
    })

    const streamImportProjectMap = new Map();
    ipcMain.handle("cancel-ImportProject", handlerHelper.cancelHandler(streamImportProjectMap));
    ipcMain.handle("ImportProject", (e, params, token) => {
        let stream = getClient().ImportProject(params);
        handlerHelper.registerHandler(win, stream, streamImportProjectMap, token)
    })
}
