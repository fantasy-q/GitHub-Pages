let p = Promise.resolve(new Error('foo'));
setTimeout(console.log, 0, p);

// Promise <resolved>: Error: foo