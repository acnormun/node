import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req
    console.log(method, url)
    
    if(method === 'GET' && url === '/users'){
        return res.end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users'){
        users.push({
            nome: 'fulano',
            email: 'fulano@gmail.com'
        })

        return res.end('Criação de usuário')
    }

    console.log('Hello World')
})

server.listen(3333)



