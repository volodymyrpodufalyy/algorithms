let d = 256;

function rabinKarpSearch(pat, str, q) {
  let res = [];
  let M = pat.length;
  let N = str.length;
  let i, j;

  // Hash value for pattern
  let patHash = 0;

  // Hash value for str
  let strHash = 0;

  let powerOfBase = 1;
  for (i = 0; i < M - 1; i++) powerOfBase = (powerOfBase * d) % q;

  for (i = 0; i < M; i++) {
    patHash = (d * patHash + pat[i].charCodeAt()) % q;
    strHash = (d * strHash + str[i].charCodeAt()) % q;
  }

  for (i = 0; i <= N - M; i++) {
    if (patHash == strHash) {
      /* Check for characters one by one */
      for (j = 0; j < M; j++) {
        if (str[i + j] !== pat[j]) break;
      }

      if (j == M) res.push(i);
    }

    if (i < N - M) {
      strHash =
        (d * (strHash - str[i].charCodeAt() * powerOfBase) +
          str[i + M].charCodeAt()) %
        q;

      if (strHash < 0) strHash = strHash + q;
    }
  }
  return res;
}

module.exports = rabinKarpSearch;
