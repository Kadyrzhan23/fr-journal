import { api } from '../api'

export const articleApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: () => '/posts',
        }),
        getArticleById: builder.query({
            query: (id: string) => `/post/${id}`,
        }),
    }),
})

export const { useGetArticlesQuery, useGetArticleByIdQuery } = articleApi