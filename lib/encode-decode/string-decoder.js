function base64ToUtf8(base64) {
  return atob(asciiToUtf8(base64));
}

function utf8ToBase64(string) {
  return btoa(utf8ToAscii(string));
}

function utf8ToAscii(s) {
  return unescape(encodeURIComponent(s));
}

function asciiToUtf8(s) {
  return decodeURIComponent(escape(s));
}

export default {
  base64ToUtf8: base64ToUtf8,
  utf8ToBase64: utf8ToBase64,
  utf8ToAscii: utf8ToAscii,
  asciiToUtf8: asciiToUtf8
}
