import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: '',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/source'}),
    tagTypes: ['Vacancies'],
    endpoints: builder => ({
        getVacancies: builder.query({
            query: () => '/',
            providesTags: ['Vacancies']
        })
    })
})

export const {useGetVacanciesQuery} = apiSlice;