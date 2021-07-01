import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		margin: "1rem auto",
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	truncate: {
		display: "block",
		width: "100%",
		height: "10em",
		overflow: "hidden",
	},
}));

export default function BlogCard(props) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardHeader title={props.blog.title} subheader={props.blog.date} />
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='div'>
					<ReactMarkdown
						className={classes.truncate}
						children={props.blog.description}
					/>
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='medium' color='primary'>
					Read More
				</Button>
			</CardActions>
		</Card>
	);
}
