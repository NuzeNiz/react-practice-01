const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type message{
        title:String!
        content:String
    }

    type Query{
        messages:[message]
    }
`)