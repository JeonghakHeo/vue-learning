const app = Vue.createApp({
	data() {
		return {
			url: 'https://www.thenetninja.co.uk',
			showBooks: true,
			books: [
				{ title: 'name of the wind', author: 'patrik rothfuss', isFav: true},
				{ title: 'the way of kings', author: 'brandon sanderson', isFav: false},
				{ title: 'the final empire', author: 'patric rothfuss', isFav: true}
			]
		}
	},
	methods: {
		toggleShowBooks() {
			this.showBooks = !this.showBooks
		},
		toggleFav(book) {
			book.isFav = !book.isFav
		}
	}
})


app.mount('#app')