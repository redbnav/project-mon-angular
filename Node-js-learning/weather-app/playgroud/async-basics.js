console.log('Starting App');
setTimeout(() => {
    console.log('Inside of callback');
}, 2000);  // setTimeout Non-blocking method to demostrate async programming

setTimeout(() => {
    console.log('Inside second callback');
}, 0);      // Prints after finishing app print
console.log('Finishing App')
