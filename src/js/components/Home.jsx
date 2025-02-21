import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [lista, setLista] = useState(["Make the bed", "Wash my hands", "Eat"])
	const [tarea, setTarea] = useState("")

	const agregarTarea = (e) =>{
		e.preventDefault()
		console.log(tarea)
		setLista([...lista, tarea])
		setTarea("")
	}
	return (
		<div className="text-center container">
            

			<h1 className="text-center mt-5">To do list</h1>
			<div className="d-flex justify-content-center">
			<input className="form-control" value={tarea} onChange={(e)=> setTarea(e.target.value)}/>
			<button className="btn btn-success" onClick={(e)=> agregarTarea(e)}>Agregar tarea</button>
			</div>
			<ul className="list-group border-secondary mt-3">
				{lista.map((tarea,index) =>(
					<li key={index} className="list-group-item border border-secondary">{tarea}</li>
				))}
			</ul>
		</div>
	);
};

export default Home;