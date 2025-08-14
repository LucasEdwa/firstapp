import { defineField, defineType } from 'sanity'

export const movie = defineType({
  name: 'movie',
  title: 'Movie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'director',
      title: 'Director',
      type: 'string'
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date'
    }),
    defineField({
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'number'
    }),
    defineField({
      name: 'genre',
      title: 'Genre',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Action', value: 'action' },
          { title: 'Comedy', value: 'comedy' },
          { title: 'Drama', value: 'drama' },
          { title: 'Horror', value: 'horror' },
          { title: 'Romance', value: 'romance' },
          { title: 'Sci-Fi', value: 'sci-fi' },
          { title: 'Thriller', value: 'thriller' },
          { title: 'Documentary', value: 'documentary' }
        ]
      }
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'string',
      options: {
        list: [
          { title: 'G', value: 'g' },
          { title: 'PG', value: 'pg' },
          { title: 'PG-13', value: 'pg-13' },
          { title: 'R', value: 'r' },
          { title: 'NC-17', value: 'nc-17' }
        ]
      }
    }),
    defineField({
      name: 'cast',
      title: 'Cast',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'trailer',
      title: 'Trailer URL',
      type: 'url'
    })
  ],
  preview: {
    select: {
      title: 'title',
      director: 'director',
      media: 'poster'
    },
    prepare(selection) {
      const { title, director } = selection
      return {
        title: title,
        subtitle: director ? `Directed by ${director}` : 'No director'
      }
    }
  }
})