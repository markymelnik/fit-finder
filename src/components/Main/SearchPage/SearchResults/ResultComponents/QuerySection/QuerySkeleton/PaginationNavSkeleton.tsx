import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PaginationNavSkeleton = () => {
  return (
    <div className="query-skeleton">
      <Skeleton height={30} width={160} />
    </div>
  )
}

export default PaginationNavSkeleton;