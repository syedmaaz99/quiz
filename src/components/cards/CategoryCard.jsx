import React from "react";
import "./card.css";
const CategoryCard = () => {
  return (
    <div className="card-parent">
      <div class="category-card">
        <div className="h-[180px] mt-5" >
          <div class="card-header">
            <span class="category-name">Category Name</span>
            <span class="delete-icon">&#128465;</span>
          </div>

          <div class="parent">
            <div class="quiz-information">
              <span class="Q-A"> QUIZZES ATTEMPT</span>
              <span class="Q-N">200+</span>
            </div>
            <div class="stats">
              <span class="stat">
                <span class="red-dot"></span> 20 <strong>NEGATIVE</strong>
              </span>
              <span class="stat">
                <span class="orange-dot"></span> 50 <strong>AVERAGE</strong>
              </span>
              <span class="stat">
                <span class="green-dot"></span> 80 <strong>POSITIVE</strong>
              </span>
            </div>
          </div>
          <div class="card-footer">
            <span>
              <strong>AUTHOR'S NAME:</strong> ROBERTO CARLO
            </span>
            <span className="text-right" >
              <strong>UPLOADED DATE:</strong> 01/02/2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
