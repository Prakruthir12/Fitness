import { defineType,defineField } from "sanity";

export default defineType({
    name: 'sitetitle',
    title: 'site Title',
    type: 'document',
    fields:[
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
        }),

    ]
}
)