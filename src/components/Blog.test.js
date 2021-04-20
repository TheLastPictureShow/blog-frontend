import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Blog from "./Blog";

test("renders title and author, does not render url or likes by default", () => {
  const blog = {
    title: "Castles",
    author: "Martin",
    url: "www.abc.com",
    likes: 5,
  };

  const component = render(<Blog blog={blog} />);

  expect(component.container).toHaveTextContent("Castles", "Martin");
  expect(component.container).not.toHaveTextContent("www.abc.com", "5");
});
