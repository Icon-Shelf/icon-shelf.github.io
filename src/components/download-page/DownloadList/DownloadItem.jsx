import * as React from "react";

const DownloadItem = ({ children, action }) => {
  return (
    <div className="flex flex-col items-center justify-end pb-5 w-72 h-72 md:w-80 border-2 border-mockup rounded-lg">
      <div>{children}</div>

      <div className="mt-8 w-full px-4">{action}</div>
    </div>
  );
};

export default DownloadItem;
