import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Nav } from "react-bootstrap";
import {
  allState,
  handleActivePagination,
  handleCurrentPage,
  handlePagination,
} from "../../features/shopSlice";

const Pagination = ({ setLoading }) => {
  const state = useSelector(allState);
  const dispatch = useDispatch();
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(state.temp.length / state.paginationValues.perPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const setCurrentPage = (number) => {
    dispatch(handleCurrentPage(number));
  };

  React.useEffect(() => {
    dispatch(handlePagination());
  }, [state.paginationValues.currentPage, state.temp]);
  return (
    <>
      {pageNumbers.length > 1 && state.filterItems.length > 0 && (
        <Nav className="pagination d-flex gap-3 my-3 ps-2">
          {pageNumbers.map((number, i) => {
            return (
              <Nav.Item
                className="btn border border-1 border-dark"
                style={
                  i === state.activePagination
                    ? { background: "#000", color: "#fff" }
                    : {}
                }
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </Nav.Item>
            );
          })}
        </Nav>
      )}
    </>
  );
};

export default Pagination;
