let d = 256; 
  

function rabinKarpSearch(pat, txt, q) 
{ 
    let M = pat.length; 
    let N = txt.length; 
    let i, j; 
      
    // Hash value for pattern 
    let p = 0; 
      
    // Hash value for txt 
    let t = 0; 
    let h = 1; 
  

    for(i = 0; i < M - 1; i++) 
        h = (h * d) % q; 
  
    for(i = 0; i < M; i++) 
    { 
        p = (d * p + pat[i].charCodeAt()) % q; 
        t = (d * t + txt[i].charCodeAt()) % q; 
    } 
  
    for(i = 0; i <= N - M; i++) 
    { 
  
        if (p == t) 
        { 
              
            /* Check for characters one by one */
            for(j = 0; j < M; j++) 
            { 
                if (txt[i+j] != pat[j]) 
                    break; 
            } 
  
            if (j == M) 
                console.log('Pattern found at index ' + i + '\n');
        } 
  

        if (i < N - M) 
        { 
            t = (d * (t - txt[i].charCodeAt() * h) + 
                      txt[i + M].charCodeAt()) % q; 
  
            if (t < 0) 
                t = (t + q); 
        } 
    } 
} 
  

module.exports = rabinKarpSearch;
