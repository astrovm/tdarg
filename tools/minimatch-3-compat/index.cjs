// minimatch 3 exported the match function itself, with Minimatch, filter,
// makeRe and the rest on it. minimatch 11 exports the same function, named.
module.exports = require("minimatch-11").minimatch;
