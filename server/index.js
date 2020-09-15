const path = require('path')
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema')

const CWD = process.cwd()
const PORT = 3000

const app = express()

app.use('/q', graphqlHTTP({
    schema:schema,
    rootValue:{
        messages:()=>{
            return [
                {title:'alpha', content:''},
                {title:'bravo', content:''},
                {title:'charly', content:''},
                {title:'delta', content:''}
            ]
        }
    },
    graphiql:true
}))

app.use('/dist', express.static(path.join(CWD, 'build', 'public')))

app.use('/', (req, res)=>{
    res.sendFile(path.join(CWD, 'index.html'))
})

app.listen(PORT, ()=>{console.log(`Server Listening on ${PORT}`)})