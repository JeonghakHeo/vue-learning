const app = Vue.createApp({
	data() {
		return {
			showBooks: true,
			books: [
				{ title: 'name of the wind', author: 'patrik rothfuss'},
				{ title: 'the way of kings', author: 'brandon sanderson'},
				{ title: 'the final empire', author: 'patric rothfuss'}
			]
		}
	},
	methods: {
		toggleShowBooks() {
			this.showBooks = !this.showBooks
		},
	}
})


app.mount('#app')