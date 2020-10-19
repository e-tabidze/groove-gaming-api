import React from "react";
import { Link } from "react-router-dom";

import "../CSS/documentationSection.css";

import settings from "../resources/images/settings.png";
import shape from "../resources/images/Shape.png";
import target from "../resources/images/target.png";
import group1 from "../resources/images/group1.png";

const DocumentationSection = () => {
  return (
    <div className="documentation-container">
      <div className="api-document">
        <div>
          <img src={settings} className="settings-icon" />
        </div>
        <div>
          <Link to="/api-document">
            <span className="title">Api Document</span>
          </Link>
          <Link to="/api-document">
            <span className="description">Learn Documents of Api Document</span>
          </Link>
        </div>
        <div>
          <Link to="/api-document">
            <img src={group1} className="learn-more-icon" />
          </Link>
        </div>
      </div>

      <div className="api-document">
        <div>
          <img src={shape} className="settings-icon" />
        </div>
        <div>
          <span className="title">Game Studios</span>
          <span className="description">Learn More About Our Providers</span>
        </div>
        <div>
          <img src={group1} className="learn-more-icon" />
        </div>
      </div>

      <div className="api-document">
        <div>
          <img src={target} className="settings-icon" />
        </div>
        <div>
          <span className="title">Marketing Information</span>
          <span className="description">Learn Documents of Api Document</span>
        </div>
        <div>
          <img src={group1} className="learn-more-icon" />
        </div>
      </div>
    </div>
  );
};

export default DocumentationSection;
