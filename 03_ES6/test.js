function doSomething(callback) {
    callback();
    console.log('Before callback');
    
    console.log('After callback');
}

function callback() {
    console.log('Inside callback');
    
}

doSomething(callback);