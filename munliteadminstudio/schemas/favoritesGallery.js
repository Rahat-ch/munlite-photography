export default {
    name: 'FavoritesGallery',
    title: 'Favorites Gallery',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ],
}
