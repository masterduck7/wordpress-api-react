import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [posts, setPosts] = useState([]);
	const getPots = async () => {
		const { data } = await axios.get(
			process.env.REACT_APP_WORDPRESS_SITE + "wp-json/wp/v2/posts"
		);
		setPosts(data);
	};
	useEffect(() => {
		getPots();
	}, []);

	return (
		<div>
			{posts.map(function (post) {
				console.log(post.content.rendered);
				return (
					<React.Fragment>
						<h1>ID: {post.id}</h1>
						<h1>{post.title.rendered}</h1>
						<React.Fragment>
							<div
								dangerouslySetInnerHTML={{ __html: post.content.rendered }}
							/>
						</React.Fragment>
					</React.Fragment>
				);
			})}
		</div>
	);
}

export default App;
