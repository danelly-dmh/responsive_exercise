(function(){
	var app = angular.module('store',[]); //mandar hablar a angular
//prefijo directiva de angular y todo lo demas directiva externa
	var lipsticks = [
	{
		name:'Pink #43',
		price: 4.99,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
		images: [
			{full: 'public/img/pink.jpg',
			thumb: 'public/img/pink.jpg'
		}
	],
	reviews: [
				{stars: 5, body:'I love this', author:'amanda_gd32.dm@outlook.com'},
				{stars: 5, body:'I love this color, the product was good. Thanks!', author:'jennifer_gfam@gmail.com'}
			]
	},
	{
		name:'Pink  #22',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		images: [
			{full: 'public/img/pink2.jpg',
			thumb: 'public/img/pink2.jpg'
		}
	],
	reviews: [
				{stars: 5, body:'I love this product and I wanna buy another one', author:'gorgeous21@gmail.com'},
				{stars: 5, body:'Pretty cool color', author:'oobr43_nnk@outlook.com.mx'}
			]
	},
	{
		name:'Juicy Grapes',
		price: 8.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		images: [
			{full: 'public/img/purple.jpg',
			thumb: 'public/img/purple.jpg'
		}
	],
	reviews: [
				{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'},
				{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'}
			]
		},
		{
			name:'Gloss',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			images: [
				{full: 'public/img/gloss.jpg',
				thumb: 'public/img/gloss.jpg'
			}
		],
		reviews: [
					{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'},
					{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'}
				]
			},
		{
			name:'Bloody Mary',
			price: 8.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			images: [
				{full: 'public/img/red2.jpg',
				thumb: 'public/img/red2.jpg'
			}
			],
			reviews: [
						{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'},
						{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'}
					]
		},
		{
			name:'Angry Vampire',
			price: 6.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			images: [
				{full: 'public/img/red.jpg',
				thumb: 'public/img/red.jpg'
			}
		],
		reviews: [
					{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'},
					{stars: 5, body:'I love this', author:'danelly.dm@gmail.com'}
				]
			}
	];
	app.controller('StoreController', function(){
		this.products = lipsticks;
	});//solo se manejara en el entorno de app
	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		this.isSelected = function(checkTab){
			return this.tab === checkTab
		}
	});
	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	})
})();
