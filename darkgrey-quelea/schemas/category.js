export default {
    name: 'category',
    type: 'document',
    title: 'Menu category',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Cagetory name',
        Validation: (Rule) => Rule.required(),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image of the Category',
      },
    ]
  }