import React from "react";
import BlogCard from "../card/card.component";
import "./CardList.styles.scss";

const CardList = ({ blogs, userId }) => {
	const filteredBlogs = userId
		? blogs.filter((blog) => blog.userId === userId)
		: blogs;
	return (
		<div className='card-list'>
			{filteredBlogs.map((blog) => {
				return <BlogCard key={blog.post} blog={blog} />;
			})}
		</div>
	);
};

export default CardList;
