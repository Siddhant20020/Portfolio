import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ChessImage from "../../images/chess_project.jpg";
import UberCloneImage from "../../images/uber_clone.jpg";
import EmployeeManagementImage from "../../images/employee_management.jpg";
import SoccerSummarizationImage from "../../images/soccer_summarization.jpg";
import MovieRecommenderImage from "../../images/movie_recommender.jpg";
import BookRecommenderImage from "../../images/book_recommender.jpg";
import VendorImage from "../../images/VendorImage.jpg";
import NextWordPredictorImage from "../../images/LSTM.png";
import "./styles.css";

const projectData = [
  {
    id: 2,
    name: "Chess Project (Socket.io)",
    image: ChessImage,
    link: "https://github.com/Siddhant20020/Chess",
  },
  {
    id: 2,
    name: "Uber Clone (MERN)",
    image: UberCloneImage,
    link: "https://github.com/Siddhant20020/Uber-Clone",
  },
  {
    id: 2,
    name: "Employee Management System",
    image: EmployeeManagementImage,
    link: "https://github.com/Siddhant20020/Employee-Management-System",
  },
  {
    id: 3,
    name: "Next Word Predictor Using LSTM",
    image: NextWordPredictorImage,
    link: "https://github.com/Siddhant20020/Next-Word-Predictor-Using-LSTM",
  },
  {
    id: 1,
    name: "FlashKick: Football Highlight Generator",
    image: SoccerSummarizationImage,
    link: "https://github.com/Siddhant20020/FlashKick",
  },
  {
    id: 3,
    name: "Movie Recommender System",
    image: MovieRecommenderImage,
    link: "https://github.com/Siddhant20020/Movie-Recommender-System",
  },
  {
    id: 3,
    name: "Book Recommender System",
    image: BookRecommenderImage,
    link: "https://github.com/Siddhant20020/Book-Recommender-System-using-Collaborative-Filtering",
  },
  {
    id: 3,
    name: "Vendor Sales Performance Analysis",
    image: VendorImage,
    link: "https://github.com/Siddhant20020/Vendor-Sales-Performance-Analysis",
  },

];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "AI/ML",
  },
];

const Projects = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  // Filtering logic
  let filteredItems;
  if (filteredValue === 1) {
    filteredItems = projectData;
  } else if (filteredValue === 2) {
    // Development category: include projects with id 1 or 2
    filteredItems = projectData.filter(item => [1, 2].includes(item.id));
  } else if (filteredValue === 3) {
    // AI/ML category: include all AI/ML projects
    filteredItems = projectData.filter(item =>
      [
        "FlashKick: Football Highlight Generator",
        "Movie Recommender System",
        "Book Recommender System",
        "Vendor Sales Performance Analysis",
        "Next Word Predictor Using LSTM"
      ].includes(item.name)
    );
  }

  return (
    <section id="project" className="project">
      <PageHeaderContent
        headerText="My Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="project__content">
        {/* Filter */}
        <ul className="project__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Cards */}
        <div className="project__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="project__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="project__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
