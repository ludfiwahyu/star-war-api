import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Modal, Button, ListGroup } from "react-bootstrap";
import { SiStarship } from "react-icons/si";
import { GiFilmSpool } from "react-icons/gi";
import { fetchStarWars } from "../store/actionCreator";
import { useNavigate } from "react-router-dom";

export default function StarWars() {
  const { datas, loading, error } = useSelector((state) => state.starWars);
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState("");
  const [show, setShow] = useState(false);
  const [modalPayload, setModalPayload] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (e, payload) => {
    setModalPayload(payload);
    console.log(modalPayload);
    setShow(true);
  };

  useEffect(() => {
    dispatch(fetchStarWars());
  }, [dispatch]);

  const searchText = (e) => {
    const { value } = e.target;
    setFilterData(value);
  };

  let dataSearch = datas.filter((el) => {
    return el.name.toLowerCase().includes(filterData.toLowerCase());
  });

  const navigate = useNavigate();

  const handleFilmDetail = (payload) => {
    let id = payload.replace('https://swapi.dev/api/films/','');
    id = id.replace('/','');
    console.log(id)
    navigate(`/films/${id}`);
  };

  return (
    <div className="container">
      <div className="shadow p-3 mb-5 bg-white rounded">
        <h2>Star Wars</h2>
        <div className="row d-flex justify-content-between">
          <div className="col-sm-3 mt-4">
            <div className="search">
              <form className="form-inline">
                <input
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search by name"
                  aria-label="Search"
                  value={filterData}
                  onChange={searchText}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="table-responsive">
          {loading ? (
            <div className="container">
              <img src={require("../assets/loading.jpg")} />
            </div>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Height</th>
                  <th>Mass</th>
                  <th>Gender</th>
                  <th>Films</th>
                </tr>
              </thead>
              <tbody>
                {dataSearch.map((el) => {
                  return (
                    <tr key={el.name}>
                      <td>{el.name}</td>
                      <td>{el.height}</td>
                      <td>{el.mass}</td>
                      <td>{el.gender}</td>
                      {/* <td>
                        <SiStarship size="2rem" />
                      </td> */}
                      <td>
                        <GiFilmSpool
                          size="2rem"
                          isOpen={el.films}
                          onClick={(e) => handleShow(true, el.films)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Film List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalPayload.map((el, index) => {
            return (
              <ListGroup key={index} >
                <ListGroup.Item action onClick={(e) => handleFilmDetail(el)} > {el}</ListGroup.Item>
              </ListGroup>
              );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
