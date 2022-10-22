const http = require('http')
const fs = require('fs/promises')

const servidor = http.createServer((req, res) => {
    const url = new URL('http://localhost:8888' + req.url)
    let camino = 'static' + url.pathname
    if (camino == 'static/')
        camino = 'static/front.html'

    fs.stat(camino)
        .then(() => {
            fs.readFile(camino)
                .then(contenido => {
                    res.writeHead(200, { 'Content-Type': 'text/html' })
                    res.write(contenido)
                    res.end()
                })
                .catch(error => {
                    res.writeHead(500, { 'Content-Type': 'text/plain' })
                    res.write('Error interno')
                    res.end()
                })
        })
        .catch(error => {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end('<h1>Error 404: No existe el recurso solicitado</h1>')
        })
})

servidor.listen(8888)

console.log('Servidor web iniciado')
