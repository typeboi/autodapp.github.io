import PropTypes from "prop-types";
import React from "react";

import Billboard from "./Billboard"
{/* <Header />

<main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
  {children}
</main> */}

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Billboard />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
