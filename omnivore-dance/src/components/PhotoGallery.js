import Isotope from "isotope-layout";
import React, { forwardRef, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { imgBaseUrl } from "../App";
import { useLocalizedConfig } from "../components/Config";
import { LanguageContext } from "../components/LanguageProvider";

let photo = require("../config/photo.config.json");

function FilterItem(props) {
  return (
    <li
      className={"filter" + (props.active ? " active" : "")}
      onClick={props.onClick}
    >
      {props.title}
    </li>
  );
}

const PhotoGalleryItem = forwardRef((props, ref) => {
  const classSetting = props.position + " " + props.tag;
  const bgImageStyle = {
    backgroundImage: "url(" + imgBaseUrl + props.image + ")",
  };

  return (
    <div className={classSetting} ref={ref} style={{ padding: "0 5px" }}>
      {/* <Link to={props.link}> */}
      <a
        href={props.link}
        className="portfolio-item set-bg"
        style={bgImageStyle}
      >
        <div className="portfolio-text">
          <h2>{props.title}</h2>
          <p>{props.location}</p>
        </div>
      </a>
      {/* </Link> */}
    </div>
  );
});

function PhotoGallery() {
  // const photo = useLocalizedConfig("photo.config.json");
  const [filter, setFilter] = useState("*");
  const [isotope, setIsotope] = useState(undefined);
  const [activity, setActivity] = useState();
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    if (photo) {
      if (!isotope) {
        setTimeout(() => {
          const node = document.querySelector(".isotope_items");
          setIsotope(new Isotope(node, { layoutMode: "fitRows" }));
        }, 100);
      }

      setActivity({
        ...photo,
        display_number: activity
          ? activity.display_number
          : photo.display_number,
      });
    }
  }, [photo]);

  useEffect(() => {
    if (isotope) {
      setIsotope(undefined);
      setTimeout(() => {
        setIsotope(new Isotope(".isotope_items", { layoutMode: "fitRows" }));
      }, 100);
    }
  }, [activity]);

  const onChangeFilter = (filterLabel) => {
    // setActivity({ ...activity, display_number: 100 })
    isotope.arrange({
      filter: filterLabel,
    });
    isotope.layout();
    // setActivity({ ...activity, display_number: 5 })
  };

  return (
    <section className="portfolio-section spad" id="gallery">
      <div style={{ margin: "20px" }}>
        <div className="section-title">
          <h2>{photo && photo.title}</h2>
        </div>
        <div>
          <ul className="portfolio-filter">
            {photo &&
              photo.tags.map((item) => (
                <FilterItem
                  active={filter === item.label}
                  onClick={() => {
                    setFilter(item.label);
                    onChangeFilter(item.label);
                  }}
                  filter={item.label}
                  title={item.name}
                />
              ))}
          </ul>
        </div>
        {photo && (
          <div className="row isotope_items">
            {/* <FlipMove> .filter(item => (filter === "*" || filter == item.filter)) */}
            {activity &&
              activity.covers
                .slice(0, activity.display_number)
                .map((item) => (
                  <PhotoGalleryItem
                    key={`${item.title}_${activity.display_number}`}
                    id={item.id}
                    tag={item.filter}
                    image={item.image}
                    title={item.title}
                    location={item.location}
                    position={item.position}
                    link={item.link}
                  />
                ))}
            {/* </FlipMove> */}
          </div>
        )}
      </div>
    </section>
  );
}

export default PhotoGallery;
