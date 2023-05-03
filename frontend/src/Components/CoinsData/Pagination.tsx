import { useGetCoinsDataQuery } from "../../Features/CoinsData";
import "./CoinsData.css";

interface iPagination {
  postPerPage: number;
  totalPages: number | undefined;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination = ({
  postPerPage,
  totalPages,
  paginate,
  currentPage,
}: iPagination) => {
  const { data } = useGetCoinsDataQuery();

  const postNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil((totalPages as number) / (postPerPage as number));
    i++
  ) {
    postNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      {postNumbers.map((number) => (
        <li
          key={number}
          onClick={() => {
            data ? paginate(number) : <h3>Loading...</h3>;
          }}
          className={
            number === currentPage ? " active PaginateNum" : "PaginateNum"
          }>
          {number}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
