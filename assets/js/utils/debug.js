const DEBUG = false;

function debugLog(...args) {
  if (DEBUG) console.log(...args);
}

function debugWarn(...args) {
  if (DEBUG) console.warn(...args);
}

function debugError(...args) {
  if (DEBUG) console.error(...args);
}