import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './_skeleton_card.scss';

const SkeletonCard = () => {
	return (
		<div className="results-skeleton-card">
			<div className="skeleton-card-top">
				<Skeleton height={225} />
			</div>
			<div className="skeleton-card-bottom">
				<Skeleton count={3} height={30} />
			</div>
			
		</div>
	)
}

export default SkeletonCard;