/*import { useState } from 'react';

export const Body = () => {
  const [books, setBooks] = useState(null);

  // we will use async/await to fetch this data
  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
      console.log(data);
    // store the data into our books variable
    setBooks(data[0].Name) ;
  }
  getData();
  return (
    <div>render the data here</div>
  )
}
import React from 'react';

export const 

import React from 'react';
const Body = () =>{
  return(
    // Simple GET request using fetch
    fetch('http://localhost:3000/api/course/')
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }))
)
}
export default Body;
import React from "react";
import './App.css';
class Body extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					User_Name: { item.username },
					Full_Name: { item.name },
					User_Email: { item.email }
					</ol>
				))
			}
		</div>
	);
}
}
export default Body;
*/
import React from 'react';
export const Body = () =>{
		return(
			<div>
				hello world
			</div>
		)
}