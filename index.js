const navList = document.querySelector('.nav__lists')
const navSubNavigation = document.querySelectorAll('.nav__sublist')
const iconsNav = document.querySelectorAll('.nav__icon')
const hambuger = document.querySelector('#hamburger')
const nav = document.querySelector('.nav')
let lastNavElementOpen = null
let lastIconOpen = null
let lastButtonSelected = null

hambuger.addEventListener('click', () => {
	nav.classList.toggle('show')
	hambuger.classList.toggle('open')
})

const closeNavItem = () => {
	lastNavElementOpen && lastNavElementOpen.classList.remove('show')
	lastIconOpen && lastIconOpen.classList.remove('reverse')
}

const assignItems = (target) => {
	lastIconOpen = target.children[0]
	lastNavElementOpen = target.nextElementSibling
	lastButtonSelected = target
} 

navList.addEventListener('click', ({ target }) => {
	if (target.tagName === 'BUTTON') {
		if (lastButtonSelected === target) {
			closeNavItem()
			lastIconOpen = null
			lastNavElementOpen = null
			lastButtonSelected = null
			return
		}

		lastNavElementOpen && lastNavElementOpen.classList.remove('show')
		lastIconOpen && lastIconOpen.classList.remove('reverse')

		assignItems(target)

		lastNavElementOpen.classList.toggle('show')
		lastIconOpen?.classList.add('reverse')
	}
})