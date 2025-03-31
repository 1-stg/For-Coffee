document.addEventListener('DOMContentLoaded', () => {
	const addToCartButtons = document.querySelectorAll('.menu-item button')
	addToCartButtons.forEach(button => {
		button.addEventListener('click', () => {
			alert('Товар добавлен в корзину!')
		})
	})
})
