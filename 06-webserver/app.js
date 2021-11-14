const http = require('http');

http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Fernando'
    // };

    // res.write(JSON.stringify(persona));

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' });

    res.write('id, nombreº\n');
    res.write('1, Fernandoº\n');
    res.write('2, Maríaº\n');
    res.write('3, Juanº\n');
    res.write('4, Pedroº\n');
    res.end();
})
.listen(8080);

console.log('Escuchando en el puerto', 8080);