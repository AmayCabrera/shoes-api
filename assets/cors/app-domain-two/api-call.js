(async () => {
    console.log('loading...');
    const response = await fetch('http://localhost:3000/shoes');
    const data = await response.json();
    console.log('data: ', data);
})();