const SubheaderSearchBar = () => {
  return (
    <div className='subheader-search-bar'>
      <form>
        <input type='text' value={''} placeholder='Search...' />
        <button type='submit'></button>
      </form>
    </div>
  );
};

export default SubheaderSearchBar;
