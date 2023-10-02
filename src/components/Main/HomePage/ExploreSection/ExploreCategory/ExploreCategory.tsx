import './_explore-category.scss';

type ExploreCategoryProps = {
  innerText: string;
  onClick: () => void;
}

const ExploreCategory = ({ innerText, onClick }: ExploreCategoryProps) => {

  return (
    <div className="explore-category" onClick={onClick}>
      <div className="category-text">{innerText}</div>
    </div>
  );
};

export default ExploreCategory;
