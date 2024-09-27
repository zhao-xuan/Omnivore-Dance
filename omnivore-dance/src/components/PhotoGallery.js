import Isotope from "isotope-layout";
import React, { forwardRef, useEffect, useState } from "react";
import { useLocalizedConfig } from "./Config";
import { BASE_URL } from "../App";
import { Link } from "react-router-dom";

const PhotoGalleryItem = forwardRef((props, ref) => {
  const classSetting = "col-lg-4 col-md-6";
  const bgImageStyle = {
    backgroundImage:
      "url(" + BASE_URL + "images/projects/" + props.image + "/cover.jpg)",
    paddingTop: "100%",
  };

  return (
    <div className={classSetting} ref={ref} style={{ padding: "0 5px" }}>
      <Link to={`/project/${props.link}`}>
        <a
          href={props.link}
          className="portfolio-item set-bg"
          style={bgImageStyle}
        >
          <div className="portfolio-text">
            <h2>{props.title}</h2>
          </div>
        </a>
      </Link>
    </div>
  );
});

function PhotoGallery() {
  const configs = useLocalizedConfig("projects.config.json");
  const [isotope, setIsotope] = useState(undefined);
  const [gallery, setGallery] = useState();

  useEffect(() => {
    if (configs) {
      if (!isotope) {
        setTimeout(() => {
          const node = document.querySelector(".isotope_items");
          setIsotope(new Isotope(node, { layoutMode: "fitRows" }));
        }, 100);
      }

      setGallery(configs.projects);
    }
  }, [configs]);

  useEffect(() => {
    if (isotope) {
      setIsotope(undefined);
      setTimeout(() => {
        setIsotope(new Isotope(".isotope_items", { layoutMode: "fitRows" }));
      }, 100);
    }
  }, [gallery]);

  return (
    <section className="portfolio-section spad" id="gallery">
      <div style={{ margin: "50px" }}>
        {configs && (
          <div className="row isotope_items">
            {gallery &&
              gallery.map((item) => (
                <PhotoGalleryItem
                  key={`${item.name}`}
                  id={item.name}
                  image={item.imagePath}
                  title={item.name}
                  link={item.imagePath}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PhotoGallery;
