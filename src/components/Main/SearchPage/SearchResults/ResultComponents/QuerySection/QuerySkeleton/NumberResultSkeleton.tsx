import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const NumberResultSkeleton = () => {
  return (
    <div className="query-skeleton">
      <Skeleton height={30} width={100} />
    </div>
  )
}

export default NumberResultSkeleton;