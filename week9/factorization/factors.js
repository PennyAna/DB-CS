function factorize(event) {
    event.preventDefault();
    document.getElementById('output').innerHTML = '<p>This could take a while...</p>';
    const number = Number(form.number.value);
    
    if(window.Worder) {
        const worker = new Worker('factors.js');
        worker.postMessage(number);
        worker.addEventListener('message', (event) => {
            document.getElementById('output').innerHTML = event.data;}, false);
    }
}
self.addEventListener('message', (event) => {
    const factors = String(factorsOf(Number(event.data)));
    self.close();
} false);
