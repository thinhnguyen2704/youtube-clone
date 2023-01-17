import { Box, CardMedia, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Comment = (comment) => {
	if (!comment) return 'Loading comments';

	return (
		<Box>
			<Stack direction="row">
				<Link to={`/channel/${comment?.comment?.snippet?.channelId}`}>
					<CardMedia
						image={comment?.comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
						sx={{ borderRadius: '50%', height: '40px', width: '40px', border: '1px solid #e3e3e3', margin:'auto'}}
						component="img"
					/>
				</Link>
				<Stack direction="column">
					<Link to={`/channel/${comment?.comment?.snippet?.channelId}`}>
						<Typography variant="subtitle1" fontWeight="bold" color="#FFF">
							{comment?.comment?.snippet?.authorDisplayName}
						</Typography>
					</Link>
					<Typography color="#fff">
						{comment?.comment?.snippet?.topLevelComment?.snippet?.textDisplay}
					</Typography>
				</Stack>
			</Stack>
		</Box>
	)
}

export default Comment;