export default {
    name: 'dish',
    type: 'document',
    title: 'Dish',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of the dish',
        Validation: (Rule) => Rule.required(),
      },
      {
        name: 'short_description',
        type: 'string',
        title: 'Short description',
        Validation: (Rule) => Rule.Max(200),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image of the dish',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price of the dish in ILS',
      },
    ]
  }