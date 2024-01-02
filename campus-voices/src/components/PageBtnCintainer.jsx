import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrapper/PageBtnContainer";
import { useLocation, useNavigate, useLoaderData } from "react-router-dom";

export const loader = async ({ request }) => {
  console.log(request.url);

  const search = request.url;
  console.log(search);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
};

const PageBtnCintainer = () => {
  const {
    data: { numOfPages, currentPage},
  } = useLoaderData();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });


  const { search, pathname } = useLocation();

  const navigate = useNavigate();
  console.log(search, pathname);

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        className={`btn page-btn  ${activeClass && "active"}`}
        key={pageNumber}
        onClick={(e) => {
          handlePageChange(pageNumber);
        }}
      >
        {pageNumber}
      </button>
    );
  };

  const RenderPageButtons = () => {
    const pageButtons = [];

    //*------first page

    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
    );

    //*-------------dots

    if (currentPage < numOfPages - 2) {
      pageButtons.push(
        <span className="page-btn dots" key="dots-1">
          ...
        </span>
      );
    }

    //*-------one before current page

    if (currentPage != 1 && currentPage != 2) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage - 1,
          activeClass: false,
        })
      );
    }

    //* current page
    if (currentPage != 1 && currentPage != numOfPages) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage,
          activeClass: true,
        })
      );
    }
    //*-------one after current page
    if (currentPage != numOfPages && currentPage != numOfPages - 1) {
      pageButtons.push(
        addPageButton({
          pageNumber: currentPage + 1,
          activeClass: false,
        })
      );
    }

    //*-------------dots

    if (currentPage > -2) {
      pageButtons.push(
        <span className="page-btn dots" key="dots+1">
          ...
        </span>
      );
    }

    pageButtons.push(
      addPageButton({
        pageNumber: numOfPages,
        activeClass: currentPage === numOfPages,
      })
    );
    return pageButtons;
  };

  return (
    <Wrapper>
      <button
        className="btn prev-btn"
        onClick={(e) => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {<RenderPageButtons className=" btn page-btn" />}
      </div>
      <button
        className="btn next-btn"
        onClick={(e) => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnCintainer;
