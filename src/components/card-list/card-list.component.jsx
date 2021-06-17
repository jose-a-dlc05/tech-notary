import React from "react";
import BlogCard from "../card/card.component";
import "./card-list.styles.scss";

const CardList = (props) => {
	return (
		<div className='card-list'>
			{props.blogs.map((blog) => {
				return <BlogCard key={blog.id} blog={blog} />;
			})}
		</div>
	);
};

export default CardList;
