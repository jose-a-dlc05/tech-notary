import React from "react";
import BlogCard from "../card/Card.component";
import "./CardList.styles.scss";

const CardList = ({ blogs }) => {
	return (
		<div className='card-list'>
			{blogs.map((blog) => {
				return <BlogCard key={blog.id} blog={blog} />;
			})}
		</div>
	);
};

export default CardList;
