export default {
    name: 'restaurant',
    type: 'document',
    title: 'Restaurant',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Restaurant name',
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
        title: 'Image of the Restaurant',
      },
      {
        name: 'latitude',
        type: 'number',
        title: 'Latitude of the restaurant',
      },
      {
        name: 'longitude',
        type: 'number',
        title: 'Longitude of the restaurant',
      },
      {
        name: 'adress',
        type: 'string',
        title: 'Restaurant adress',
        Validation: (Rule) => Rule.required(),
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Enter a rating for the restaurant (1-5 stars)',
        Validation: (Rule) => 
            Rule.required()
                .min(1)
                .max(5)
                .error("Please enter a value between 1 and 5")
      },
      {
        name: 'type',
        title: 'Category',
        Validation: (Rule) => Rule.required(),
        type: 'reference',
        to: [{ type: 'category' }],
      },
      {
        name: 'dishes',
        type: 'array',
        title: 'Dishes',
        Validation: (Rule) => Rule.required(),
        of: [{ type: 'reference', to: [{type: 'dish'}] }]
      },

    ]
  }