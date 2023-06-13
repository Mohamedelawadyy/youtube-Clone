import React, { useEffect } from "react";
import "./tags.css";
import { NavigateNext } from "@mui/icons-material";
export default function Tags() {
  useEffect(() => {
    const tags = document.querySelectorAll(".miniTag");
    if (tags) {
      tags.forEach((tag) => {
        tag.addEventListener("click", () => {
          tags.forEach((tag) => tag.classList.remove("active"));
          if (tag) {
            tag.classList.add("active");
          }
        });
      });
    }
  }, []);
  return (
    <div className="tags">
      <div className="miniTag active">All</div>
      <div className="miniTag">Music</div>
      <div className="miniTag">Reels</div>
      <div className="miniTag">Mixed</div>
      <div className="miniTag">React JS</div>
      <div className="miniTag">Google Firebase</div>
      <div className="miniTag">Web Dev</div>

      <NavigateNext className="next" />
    </div>
  );
}
