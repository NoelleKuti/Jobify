import React, { useEffect } from 'react'
function Dashboard() {
	const fetchData = async () => {
		try {
			//const response = await fetch('/data.json');
			const response = await fetch('/api/v1');
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		fetchData();
	}, []);

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  )


}
export default Dashboard