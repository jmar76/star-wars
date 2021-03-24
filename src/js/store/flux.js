import React from "react";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "black",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			starships: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			//name es valor indefinido hasta que se ejecute la funcion handleclick, en el fichero card.
			addFavorites: name => {
				let myFavorites = getStore().favorites; // tenemos en la variable myFavorites guardado los elementos del array de favorites, traido a parir de getStore().favorites
				// const found = myFavorites.find(element => element == name);// el metodo find para recorrer el array y declarar una condicion para determinar que no se incluya en el array dos valores iguales.
				// if (!found) {
				let alreadyInFavorites = myFavorites.includes(name);
				if (!alreadyInFavorites) {
					setStore({ favorites: [...myFavorites, name] });
				}
				//...getStore para editar
			},
			deleteFavorites: index => {
				let myFavorites = getStore().favorites; //getStore().favorites, todos los elementos del array para editar, en este caso para eliminar.
				myFavorites.splice(index, 1);
				setStore({ favorites: myFavorites });

				// allNames => allNames.filter((elementoActualQueEstaSiendoProcesado, index) => index !== indexItem);
			},

			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())

					//código para guardar la respuesta del fetch en store.
					.then(data => setStore({ people: data.results }));

				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())

					//código para guardar la respuesta del fetch en store.
					.then(data => setStore({ planets: data.results }));

				fetch("https://www.swapi.tech/api/starships")
					.then(response => response.json())

					//código para guardar la respuesta del fetch en store.
					.then(data => setStore({ starships: data.results }));
			},
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
			}
		}
	};
};

export default getState;
