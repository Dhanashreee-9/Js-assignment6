console.log("Json")



fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(data=>console.log(data))
   .then(json => console.log(json))

