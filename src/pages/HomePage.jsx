export default function HomePage() {
	return (<div className="home-description">
		<h1>Elevating Event Management : A Full-Stack Symphony</h1>

		<div>
			<h2>Seamless Navigation meets Scalable Architecture</h2>
			<p>In the digital-first world of event planning, user experience is the ultimate differentiator. Our platform leverages the power of the React-Express ecosystem to deliver a high-performance, single-page application (SPA) that bridges the gap between complex data and intuitive design.</p>
			


			<ul>
				<li>
					<p><h3>Client-Side Agility with React Router DOM</h3>
					The frontend is built on React Router DOM, ensuring that users navigate through event catalogs without ever experiencing a page reload.
					</p><ul>
						<li><b>Dynamic Discovery:</b><br/> Using intelligent path matching (e.g., /events/:id), the app renders thousands of unique event pages through a single, optimized component.</li>
	    				<li><p><b>Loaders:</b> <br/>
	    					Traditional React apps often show a "Loading..." spinner while fetching data inside a useEffect.<br/>
	    					Loaders change this by fetching the data before the component even renders.
						</p>

	    				</li>



	    				<li><p><b>Actions: Handling Submissions Cleanly</b> <br/>
	    					Actions are the counterpart to loaders; they handle "writes" (POST, PUT, DELETE). Instead of writing complex onSubmit handlers with manual state management, you use an action.</p>
	    					
						</li>

	    			</ul>
	    		</li>
				<li>
					<h3>Enterprise-Grade Logic with Express.js</h3>
					<p>Behind every click is a robust Express.js backend. This layer acts as the application's engine, orchestrating secure API communications and data persistence.</p>
    			</li>

    		</ul>
    	</div>

    	<p>The result? A sophisticated Event Management solution where React Router manages the journey and Express powers the destination.</p>
	</div>);
}