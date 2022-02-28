import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilmDetail } from "../store/actionCreator";

export default function Film() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { filmDetail, loading } = useSelector((state) => state.starWars);
  console.log(filmDetail);

  useEffect(() => {
    dispatch(fetchFilmDetail(id));
  }, [id]);

  return (
    <div className="container ">
      {loading ? (
        <div className="container"></div>
      ) : (
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
          <div className="row ">
            <div className="col-sm3 mt-5 mb-4 text-gred">
              <div className="col-sm3 offset-sm2 mt-5 mb-4">
                <h3>
                  <b>Film Detail</b>
                </h3>
              </div>
              <div
                className="col-sm3 offset-sm2 mt-5 mb-4 ms-5"
                style={{ textAlign: "left" }}
              ></div>
              <div
                className="col-sm3 offset-sm2 mt-5 mb-4 ms-5"
                style={{ textAlign: "left" }}
              >
                <div className="row">
                  <div className="col-md-3">
                    <label>Title</label>
                  </div>
                  <div className="col-md-6">
                    <p>{filmDetail.title}</p>
                  </div>
                  <div className="col-md-3 d-flex"></div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>Episode id</label>
                  </div>
                  <div className="col-md-6">
                    <p>{filmDetail.episode_id}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>Opening Crawl</label>
                  </div>
                  <div className="col-md-6">
                    <p>{filmDetail.opening_crawl}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>Director</label>
                  </div>
                  <div className="col-md-6">
                    <p>{filmDetail.director}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>Producer</label>
                  </div>
                  <div className="col-md-6">
                    <p>{filmDetail.producer}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label>Release Date</label>
                  </div>
                  <div className="col-md-6">
                    <p>{filmDetail.release_date}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Characters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filmDetail.characters.map((character, index) => {
                      return (
                        <tr key={index}>
                          <td>{character}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
