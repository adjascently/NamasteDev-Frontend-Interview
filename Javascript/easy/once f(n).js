Implement the function once (fn) which accepts another function fn and returns a new function. This new function allows fn to be executed only once, no matter how many times it is called. On the first call, fn should be executed normally and its result returned. On subsequent calls, return the result from the first execution, without re-invoking fn.


  
Input
• A function fn (could be synchronous or asynchronous)
• The returned function can take any number of arguments



Output
• A function that:
Calls fn only once.
Returns the first result on all calls after the first.


  
Edge Cases
• Function with no arguments:
fn might be called without any arguments. Ensure your implementation still works.
• Function returning undefined or null:
fn may return undefined or null as a valid result. These should be cached and returned on subsequent calls.
• Function throwing errors:
If fn throws an error during the first call, subsequent calls should not cache the error but may re-invoke fn (depending on
implementation choice).
• Asynchronous function that rejects:
If fn returns a Promise that rejects, subsequent calls might retry or return the same rejected Promise, depending on your
implementation.
• Multiple calls before the first call resolves (async case):
For async fn, if multiple calls are made before the first Promise resolves, all should receive the same Promise.
• fn relies on this context:
Your implementation should preserve the original this context when invoking fn.



  
Code
function once(fn) { 
  let called = false; 
  let result; 
  let pendingPromise = null; 
  return function (...args) { 
if (called) return result; 
    if (pendingPromise) return pendingPromise; 

    try {
      const value = fn.apply(this, args); 

      if (value instanceof Promise) { 
        pendingPromise = value.then(
          res => {
            result = res;
            called = true; 
            pendingPromise = null; 
            return res;
          },
          err => {
            pendingPromise = null; // Clear pending promise on error
            throw err; // Re-throw to caller
          }
        );
        return pendingPromise;
      } else {
        result = value; 
        called = true; 
        return result;
      }
    } catch (err) {
      // Do not cache on error, allow retry
      throw err;
    }
  }
}




module.exports = once; // Export the function
