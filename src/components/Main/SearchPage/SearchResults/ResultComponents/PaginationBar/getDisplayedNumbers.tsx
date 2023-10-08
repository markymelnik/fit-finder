const getDisplayedNumbers = (currentPage: number, totalPages: number) => {
  if (totalPages === 1) {
    return [1];
  } else if (totalPages === 2 || currentPage === 1 || currentPage === 2) {
    return [1, 2, 3].slice(0, totalPages);
  }

  if (currentPage >= totalPages - 1) {
    return [totalPages - 2, totalPages - 1, totalPages];
  }

  return [currentPage - 1, currentPage, currentPage + 1];
};

export default getDisplayedNumbers;