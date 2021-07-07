import React from "react";
import BlogCard from "../card/card.component";
import "./CardList.styles.scss";

const CardList = ({ blogs }) => {
	return (
		<div className='card-list'>
			{blogs.map((blog) => {
				return <BlogCard key={blog.post} blog={blog} />;
			})}
		</div>
	);
};

export default CardList;
