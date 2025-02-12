//  we use use() method, because it gets executed for all routes [ i.e., all base endpoint/paths & Methods ]
function authAdmin (req, res, next) {
    // I will get data only when the admin is Authorized
    const token = "xyz";
    const isAuthorized = token === "xyz";
    if (!isAuthorized) {
        res.status(401).send("Un-Authorized User")
    }
    else {
        console.log("Admin is Authorized");
        next();
    }
}

// Middleware function to authorize User
function authUser (req, res, next) {
    // I will get data only when the admin is Authorized
    const token = "xyz";
    const isAuthorized = token === "xyz";
    if (!isAuthorized) {
        res.status(401).send("Un-Authorized User")
    }
    else {
        console.log("Admin is Authorized");
        next();
    }
}

module.exports = {
    authAdmin,
    authUser
}