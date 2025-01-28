import { React, useState, useEffect } from "react";
import "./SearchBox.scss";
import { fetchBook } from "../../store/reducer/dataSlice";
import { useParams } from "react-router";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const SearchBox = () => {
  const [filterText, setFilterText] = useState("");
  const [open, setOpen] = useState(false);
  const [filtergeners, setFiltergeners] = useState("Fiction");
  let navig = useNavigate();

  const handelSubmit = (ev) => {
    // history.push(`/book-details/:tilte/:genres?`);
    if (open) {
      navig(`/category/${filtergeners}`);
    } else {
      navig(`/result/${filterText}`);
    }
  };

  return (
    <div className="search_box">
      <div className="_search_container ">
        <h1>What are you looking for at the library?</h1>
        <div className="custom-checkbox">
          <label className="switch">
            <input
              type="checkbox"
              checked={open}
              onChange={(e) => setOpen(e.target.checked)}
            />

            <span className="slider round"></span>
          </label>
          <span className="check-search">Search by Category</span>
        </div>

        <div className="input_feild">
          {open ? (
            <select
              value={filtergeners}
              onChange={(ev) => setFiltergeners(ev.target.value)}
            >
              {[
                "Fiction",
                "Nonfiction",
                "Mystery",
                "Thriller",
                "Romance",
                "Science Fiction",
                "Fantasy",
                "Horror",
                "Biography",
                "History",
                "Self-help",
                "Poetry",
                "Children",
                "Young Adult",
                "Crime",
                "Adventure",
                "Comedy",
                "Drama",
                "Graphic Novel",
                "Science",
              ].map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          ) : (
            <input
              type="text"
              onChange={(ev) => setFilterText(ev.target.value)}
              placeholder="Search by Keyword..."
            />
          )}
          <button className="btn" onClick={handelSubmit}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
