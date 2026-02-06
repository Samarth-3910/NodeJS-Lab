const path = require('path');

console.log("--- Path Module Definitions & Examples ---\n");

// 1. path.basename(path[, suffix])
// Meaning: Returns the last portion of a path (usually the file name).
console.log("1. basename:", path.basename(__filename));
// Example with suffix removed:
console.log("   basename (no ext):", path.basename(__filename, '.js'));

// 2. path.delimiter
// Meaning: The character used to separate paths in the PATH environment variable.
// (';' on Windows, ':' on Mac/Linux)
console.log("2. delimiter:", path.delimiter);

// 3. path.dirname(path)
// Meaning: Returns the directory name of a path (the folder it is in).
console.log("3. dirname:", path.dirname(__filename));

// 4. path.extname(path)
// Meaning: Returns the extension of the path (from the last '.' to end of string).
console.log("4. extname:", path.extname(__filename));

// 5. path.format(pathObject)
// Meaning: Returns a path string from an object (this is the opposite of path.parse).
const pathObj = { dir: 'C:\\Users\\Example', base: 'file.txt' };
console.log("5. format:", path.format(pathObj));

// 6. path.matchesGlob(path, pattern)
// Meaning: Checks if a path matches a pattern (like wildcards). *Requires Node.js v20+*
if (path.matchesGlob) {
    console.log("6. matchesGlob:", path.matchesGlob('/foo/bar.js', '**/*.js'));
} else {
    console.log("6. matchesGlob: (Your Node version might be too old for this new feature)");
}

// 7. path.isAbsolute(path)
// Meaning: Checks if a path is an absolute path (starts with root like C:\ or /).
console.log("7. isAbsolute (this file):", path.isAbsolute(__filename));
console.log("   isAbsolute ('./test'):", path.isAbsolute('./test'));

// 8. path.join([...paths])
// Meaning: Joins specific path segments into one path. Handles slashes automatically.
console.log("8. join:", path.join(__dirname, 'folder', 'file.txt'));

// 9. path.normalize(path)
// Meaning: Fixes a path by resolving '..' (go back) and '.' (current) segments and fixing slashes.
console.log("9. normalize:", path.normalize('C:\\temp\\\\foo\\..\\bar'));

// 10. path.parse(path)
// Meaning: Returns an object with the path broken down into root, dir, base, ext, and name.
console.log("10. parse:", path.parse(__filename));

// 11. path.posix
// Meaning: Gives access to POSIX (Linux/Mac) specific path methods, even if you are on Windows.
console.log("11. posix.sep:", path.posix.sep); // Always '/'

// 12. path.relative(from, to)
// Meaning: Calculates the relative path to get from 'from' to 'to'.
console.log("12. relative:", path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));

// 13. path.resolve([...paths])
// Meaning: Resolves a sequence of paths into an absolute path (like navigating folders in terminal).
console.log("13. resolve:", path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

// 14. path.sep
// Meaning: The separator used for path segments ('\' on Windows, '/' on Mac/Linux).
console.log("14. sep:", path.sep);

// 15. path.toNamespacedPath(path)
// Meaning: On Windows, prefixes the path to handle very long paths (Internal/Advanced use).
console.log("15. toNamespacedPath:", path.toNamespacedPath(__filename));

// 16. path.win32
// Meaning: Gives access to Windows-specific path methods, even if you are on Mac/Linux.
console.log("16. win32.sep:", path.win32.sep); // Always '\'