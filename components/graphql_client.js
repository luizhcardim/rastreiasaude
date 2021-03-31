import { ApolloClient, InMemoryCache } from "@apollo/client";


export const clientgraphql = new ApolloClient({
    // uri: 'http://10.0.0.102:4000',
    uri: 'http://10.0.0.103:4000',
    cache: new InMemoryCache()
})

