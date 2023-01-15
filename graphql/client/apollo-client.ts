import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

export function initializeApollo(preview = false){
    const _apolloClient = new ApolloClient({
        link: createHttpLink({
            uri: "https://gapi.storyblok.com/v1/api",
            credentials: "include",
            headers: {
                token: 'IjZn7WiNrOwUaAHmtXJaawtt',
                version: preview ? "draft" : "published"
            }
        }),
        cache: new InMemoryCache({})
    })

    return _apolloClient
}