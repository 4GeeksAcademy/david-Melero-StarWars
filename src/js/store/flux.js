const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [{ title: "FIRST", background: "white", initial: "white" },
			{ title: "SECOND", background: "white", initial: "white" }],
			isLogin: false,
			users: [],
			title: '',
			currentUser: null,
			planets: [],
			vehicles: [],
			uriContacts: 'https://playground.4geeks.com/contact',
			agenda: '/David',
			contacts: [{}]
		},
		actions: {
			exampleFunction: () => { getActions().changeColor(0, "green"); }, // Use getActions to call a function within a fuction
			loadSomeData: () => {/**fetch().then().then(data => setStore({ "foo": data.bar }))*/ },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getUserJPH: async () => {
				const response = await fetch('https://www.swapi.tech/api/people/');
				if (!response.ok) {
					console.log('Error');
					return
				} 
				const data = await response.json();
				console.log(data);
				setStore({ users: data.results });
			},



			settingUser: async (user) => {
				
				
			//hacer fetch de Api user.url
			console.log(user);
				setStore({currentUser:user})
			
			
			},

			getPlanets: async () => {
				const response = await fetch('https://www.swapi.tech/api/planets')
				if (!response.ok) {
					console.log('Error ')
					return
				}
				const data = await response.json()
				console.log(data);
				setStore({ planets: data.results })
			},

			getVehicles: async () => {
				const response = await fetch('https://www.swapi.tech/api/vehicles/')
				if (!response.ok) {
					console.log('error ', response.status, response.statusText)
					return
				}
				const data = await response.json()
				console.log(data);
				setStore({ vehicles: data.results })
			},


			getContacts: async () => {
				const uri = getStore().uriContacts + '/agendas' + getStore().agenda + '/contacts'
				// const uri = 'https://playground.4geeks.com/contact/agendas/David/contacts'

				const response = await fetch(uri)

				if (!response.ok) {
					console.log('error ', response.status, response.statusText)
					return
				}
				const data = await response.json()
				console.log(data.contacts);
				setStore({ contacts: data.contacts })
			}


		}
	};
};

export default getState;