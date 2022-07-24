import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allState, RemoveItemFromCompare } from '../../features/shopSlice';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import {
  BsFillXCircleFill,
  BsXCircle,
  BsCheckCircle,
  BsShuffle,
} from 'react-icons/bs';
const Compare = () => {
  const state = useSelector(allState);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    toast.error('Product Removed From Compare.', {
      icon: <BsXCircle />,
      position: 'bottom-left',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Flip,
      className: 'toast-success',
    });
    dispatch(RemoveItemFromCompare(id));
  };

  const [number, setNumber] = React.useState(4);
  React.useEffect(() => {
    const handleWindowResize = () => {
      const { innerWidth } = window;

      if (innerWidth < 768) {
        setNumber(2);
      } else {
        setNumber(4);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <section className="compare-section my-5 mx-2">
      <Container fluid>
        <Row className="g-0">
          {state.compare.length > 0 ? (
            state.compare.slice(0, number).map((item) => {
              const { id, image, title, price, availableSizes, colors } = item;
              return (
                <Col xs={6} md={3} key={uuidv4()}>
                  <div className="d-flex flex-column gap-4 border p-3 position-relative">
                    <button
                      className="btn border-0 position-absolute top-0 end-0"
                      onClick={() => handleRemove(id)}
                    >
                      <BsFillXCircleFill />
                    </button>
                    <div className="wrapper d-flex flex-column justify-content-center align-items-center ">
                      <div className="img-compare mb-2">
                        <Image
                          src={image}
                          alt={title}
                          loading="lazy"
                          style={{ width: '120px', height: '150px' }}
                        />
                      </div>
                      <h6>${price}</h6>
                    </div>
                    <div className="title-compare">
                      <h5 className="text-capitalize fw-bold">title</h5>
                      <h6>{title}</h6>
                    </div>

                    <div className="size-compare">
                      <h5 className="text-capitalize fw-bold">size</h5>
                      <div className="container-size d-flex gap-2 my-2">
                        {availableSizes.map((size) => {
                          return (
                            <div className="size-item" key={uuidv4()}>
                              {size}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="color-compare">
                      <h5 className="text-capitalize fw-bold">color</h5>

                      <div className="container-size d-flex gap-2 my-2">
                        {colors.map((color) => {
                          return (
                            <div
                              style={{ background: color }}
                              className="size-item"
                              key={uuidv4()}
                            ></div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })
          ) : (
            <div className="emptyCompare d-flex flex-column justify-content-center align-items-center">
              <BsShuffle className="display-1 text-muted" />
              <p className="text-capitalize ">compare is empty.</p>
            </div>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Compare;
