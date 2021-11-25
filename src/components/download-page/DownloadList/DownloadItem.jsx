import * as React from "react";
import { Button } from "../../atoms/button";

const DownloadItem = ({ children, actionText }) => {
  return (
    <div className="flex flex-col items-center justify-end pb-5 w-72 h-72 md:w-80 border-2 border-mockup rounded-lg">
      <div>{children}</div>
      <div className="mt-8 w-full px-4">
        <Button size="large" className="w-full">
          {actionText}
        </Button>
      </div>
    </div>
  );
};

export default DownloadItem;
