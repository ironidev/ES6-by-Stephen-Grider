promise = new Promise((resolve, reject)=>{
    resolve();
});

promise = new Promise((resolve, reject)=>{
    var request = new XHTMLrequest();
    // make request
    request.onload() = () => {
        resolve();
    }
});

promise
.then(() => {
    console.log('finally finished');
})
.then(() => {
    console.log('i was also run !');
})
.catch(()=> { 
    console.log('uh oh !');
})


url = "https://jsonplaceholder.typicode.com/posts/";

fetch
.then(response => {
    response.json();
})
.then(data=>{
    console.log(data)
})


url = "https://jsonplaceholder.typicode.com/posts123456/";

fetch
.then(response => {
    console.log(response)
})
.catch(error=>{
    console.log(error)
});