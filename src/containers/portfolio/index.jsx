import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ChessImage from "../../images/chess_project.jpg";
import UberCloneImage from "../../images/uber_clone.jpg";
import EmployeeManagementImage from "../../images/employee_management.jpg";
import SoccerSummarizationImage from "../../images/soccer_summarization.jpg";
import MovieRecommenderImage from "../../images/movie_recommender.jpg";
import BookRecommenderImage from "../../images/book_recommender.jpg";
import "./styles.scss";

const portfolioData = [
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
    id: 2,
    name: "FlashKick: Football Highlight Generator",
    image: SoccerSummarizationImage,
    link: "https://github.com/Siddhant20020/FlashKick",
  },
  {
    id: 2,
    name: "Movie Recommender System",
    image: MovieRecommenderImage,
    link: "https://github.com/Siddhant20020/Movie-Recommender-System",
  },
  {
    id: 2,
    name: "Book Recommender System",
    image: BookRecommenderImage,
    link: "https://github.com/Siddhant20020/Book-Recommender-System-using-Collaborative-Filtering",
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

const Portfolio = () => {
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
    filteredItems = portfolioData;
  } else if (filteredValue === 2) {
    filteredItems = portfolioData; // All projects are development
  } else if (filteredValue === 3) {
    // AI/ML category (only 3 specific projects)
    filteredItems = portfolioData.filter((item) =>
      [
        "FlashKick: Football Highlight Generator",
        "Movie Recommender System",
        "Book Recommender System",
      ].includes(item.name)
    );
  }

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        {/* Filter */}
        <ul className="portfolio__content__filter">
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
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
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

export default Portfolio;
