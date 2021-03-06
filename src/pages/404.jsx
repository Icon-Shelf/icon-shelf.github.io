import * as React from "react";
import { Link } from "gatsby";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <div className="">
        <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
          <div className="shadow overflow-hidden sm:rounded-lg pb-8">
            <div className="text-center pt-8">
              <h1 className="text-9xl font-bold text-white">404</h1>
              <h1 className="text-5xl font-medium py-8">Page not found</h1>
              <p className="text-2xl pb-8 px-12 font-medium">
                sorry, we couldn't find the page you were looking for.
              </p>
              <Link
                to="/"
                className="flex items-center justify-center text-purple-500 hover:text-primary"
              >
                Go back home <ArrowSmRightIcon className="w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
