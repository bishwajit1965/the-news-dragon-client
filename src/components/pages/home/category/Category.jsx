import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../newsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryWiseNews = useLoaderData();
  let numOfNews = categoryWiseNews.length;
  return (
    <div>
      {categoryWiseNews.map((cNews) => (
        <NewsCard key={cNews._id} cNews={cNews} numOfNews={numOfNews} />
      ))}
    </div>
  );
};

export default Category;
