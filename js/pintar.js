let list = JSON.parse(localStorage.getItem("listUsers"))

let table = document.getElementById("tabla");
let UsersProperty = Object.keys(list[0])
let arriba = "fas fa-arrow-up"
let abajo = "fa-solid fa-arrow-down"



function iconoAbajo() {
	eliminarIcono()
	let icon = document.createElement('i');
	id.append(icon)
	icon.className = abajo
	icon.style.color = "#fff"
	icon.style.marginLeft = "10px"
	icon.style.border = "1px solid #fff"
}
function eliminarIcono() {
	id.textContent = "id"
}
function iconoArriba() {
	eliminarIcono()
	let icon = document.createElement('i');
	id.append(icon)
	icon.className = arriba
	icon.style.color = "#fff"
	icon.style.marginLeft = "10px"
	icon.style.border = "1px solid #fff"
}

function cabecera() {
	/**Creamos la cabecera */
	let tr1 = document.createElement('tr');
	table.append(tr1)
	for (const i in UsersProperty) {
		let th = document.createElement('th')
		if (Object.hasOwnProperty.call(UsersProperty, i)) {
			const element = UsersProperty[i];
			th.textContent = element
			th.id = element
			tr1.append(th)
		}
	}
	iconoAbajo()

	/**Fin de la cabecera */
}
cabecera()

/**cuerpo */
function cuerpo() {
	for (const index in list) {
		if (Object.hasOwnProperty.call(list, index)) {
			const e = list[index];
			const tr = document.createElement("tr");
			for (let i = 0; i < UsersProperty.length; i++) {
				let td = document.createElement("td");
				UsersProperty.forEach((key) => {
					key = UsersProperty[i]
					td.textContent = e[key]
				})
				tr.append(td)
				table.append(tr)
			}
		}
	}

	let id = document.getElementById('id');
	let nombre = document.getElementById('nombre');
	let apellido = document.getElementById('apellido');
	let correo = document.getElementById('correo');
	let cargo = document.getElementById('cargo');


	id.addEventListener('click', () => {
		ordenar('id')
		eliminarCuerpo()
		cuerpo()
	})


	nombre.addEventListener('click', () => {
		ordenar('nombre')
		eliminarCuerpo()
		cuerpo()

	})


	apellido.addEventListener('click', () => {
		ordenar('apellido')
		eliminarCuerpo()
		cuerpo()

	})


	cargo.addEventListener('click', () => {
		ordenar('cargo')
		eliminarCuerpo()
		cuerpo()

	})

	correo.addEventListener('click', () => {
		ordenar('correo')
		eliminarCuerpo()
		cuerpo()

	})
}
function eliminarCuerpo() {
	table.innerHTML = ""
	cabecera()
}
cuerpo()
/**Fin del cuerpo */


/**prueva */
var activador = 0
function ordenar(argument) {
	if (activador != 0) {
		if (argument == 'id') {
			list.sort((a, b) => a[argument] - b[argument])
			activador = 0
			return list
		} else {
			list.sort((a, b) => a[argument].localeCompare(b[argument]))
			activador = 0
			return list
		}
	} else {
		if (argument == 'id') {
			list.sort((a, b) => b[argument] - a[argument])
			activador = 1
			return list
		} else {
			list.sort((a, b) => b[argument].localeCompare(a[argument]))
			activador = 1
			return list
		}
	}


}
