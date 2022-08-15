import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { Row, Col } from 'react-bootstrap';
import { BsFillXCircleFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import {
  allState,
  handleCurrentPage,
  handlePagination,
  handleRemoveFilters,
  handleGetUniqueValue,
  setFilterValues,
  handleFilterByColor,
  handleFilterBySize,
  handleFilterBySort,
  handleFilterByPrice,
} from '../../features/shopSlice';

const Category = ({ setShowFilter }) => {
  const state = useSelector(allState);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(handleGetUniqueValue('colors'));
    dispatch(handleGetUniqueValue('availableSizes'));
  }, [state.items]);

  const sort = [
    { value: t('newest'), label: t('newest') },
    { value: t('descending'), label: t('descending') },
    { value: t('ascending'), label: t('ascending') },
  ];

  useEffect(() => {
    dispatch(handleCurrentPage(0));
    state.filterValues.size && dispatch(handleFilterBySize());
    state.filterValues.color && dispatch(handleFilterByColor());
    state.filterValues.sort && dispatch(handleFilterBySort());
    state.filterValues.price !== 0 && dispatch(handleFilterByPrice());
    dispatch(handlePagination());
  }, [
    state.filterValues.size,
    state.filterValues.sort,
    state.filterValues.price,
    state.filterValues.color,
  ]);

  const defaultValueSize = (sizeVal) => {
    const result = state.categories.size.find(
      (option) => option.value === sizeVal
    );

    return result;
  };

  const defaultValueSort = (optionSort, sortVal) => {
    const result = optionSort.find((option) => option.value === sortVal);
    return result;
  };

  const removeFilters = () => {
    dispatch(handleRemoveFilters());
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: 'none',
      border: '1px solid #bbb',
      cursor: 'pointer',
      outline: 'none',
    }),

    option: (provided, state) => ({
      ...provided,
      background: state.isFocused ? '#f5f5f5' : '#fff',
      color: '#000',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      opacity: 0.7,
      letterSpacing: '.5px',
    }),
  };
  return (
    <div className="filterProduct border p-3 p-lg-4 my-3 bg-white">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-capitalize fw-bold m-0">filters</h3>
        <button
          onClick={() => setShowFilter(false)}
          className="btn border-0 d-xl-none"
        >
          <BsFillXCircleFill style={{ width: '20px', height: '20px' }} />
        </button>
      </div>
      <Row className="category d-flex flex-column justify-content-center gap-5">
        <Col xs={12}>
          <div className="sort">
            <h5 className="text-capitalize">size</h5>

            <Select
              styles={customStyles}
              name="size"
              options={state.categories.size}
              value={defaultValueSize(state.filterValues.size)}
              onChange={(e) =>
                dispatch(setFilterValues({ type: 'size', val: e.value }))
              }
              placeholder="Filter By Size"
            />
          </div>
        </Col>
        <Col xs={12}>
          <div className="sort">
            <h5 className="text-capitalize">{t('sort')}</h5>
            <Select
              styles={customStyles}
              name="sort"
              options={sort}
              value={defaultValueSort(sort, state.filterValues.sort)}
              onChange={(e) =>
                dispatch(setFilterValues({ type: 'sort', val: e.value }))
              }
              placeholder={t('filter by price')}
            />
          </div>
        </Col>

        <Col xs={12}>
          <h5 className="text-capitalize">{t('color')}</h5>
          <div className="d-flex gap-2">
            {state.categories.colors.map((c, index) => {
              return (
                <div
                  key={index}
                  style={
                    state.filterValues.color.toLowerCase() === c
                      ? {
                          background: c,
                          outline: '1px solid black',
                          outlineOffset: '1px',
                        }
                      : { background: c, outline: 'none' }
                  }
                  className="color-product position-relative border d-flex justify-content-center align-items-center"
                  onClick={() =>
                    dispatch(setFilterValues({ type: 'color', val: c }))
                  }
                >
                  {c === 'all' && 'All'}
                </div>
              );
            })}
          </div>
        </Col>
        <Col xs={12}>
          <div className="sort">
            <h5 className="text-capitalize">
              {t('price')}: ${state.filterValues.price}
            </h5>
            <div className="wrapper d-flex flex-column flex-sm-row gap-2">
              <span>${state.filterValues.minVal}</span>
              <input
                min={state.filterValues.minVal}
                max={state.filterValues.maxVal}
                value={state.filterValues.price}
                type="range"
                className="range-input"
                onInput={(e) =>
                  dispatch(
                    setFilterValues({ type: 'price', val: e.target.value })
                  )
                }
              />
              <span>${state.filterValues.maxVal}</span>
            </div>
          </div>
        </Col>
      </Row>
      <div
        className="text-capitalize mt-4 fw-bold  text-white p-2 text-center btn-remove-filter"
        onClick={removeFilters}
      >
        {t('remove all filters')}
      </div>
    </div>
  );
};

export default Category;
