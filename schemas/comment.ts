import { defineType,defineField } from "sanity";
export default defineType({
    name: 'comment',
    title: 'comment',
    type: 'document',
    fields:[
        defineField({
            name: 'name',
            title: 'name',
            type: 'string'
        }),
        defineField({
            name: 'email',
            title: 'email',
            type: 'string',
        }),
        defineField({
            name: 'message',
            title: 'message',
            type: 'blockContent',
          }),

    ]
}
)