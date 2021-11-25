import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "../../atoms/button";
import { Dropdown } from "../../atoms/dropdown";
import DownloadItem from "./DownloadItem";
import { AppleLogo, LinuxLogo, WindowsLogo } from "./PlatformIcons";

const latestReleasePageUrl =
  "https://github.com/Icon-Shelf/icon-shelf/releases/latest";

const DownloadList = () => {
  const [macURL, setMacURL] = useState(latestReleasePageUrl);
  const [macSiliconURL, setMacSiliconURL] = useState(latestReleasePageUrl);

  const [winURL, setWinURL] = useState(latestReleasePageUrl);
  const [linuxURL, setLinuxURL] = useState(latestReleasePageUrl);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://api.github.com/repos/MrRobz/icon-shelf/releases/latest"
      ).then((res) => res.json());

      const tagName = res.tag_name;
      const versionName = tagName.substring(1);

      setMacURL(
        `https://github.com/Icon-Shelf/icon-shelf/releases/download/${tagName}/Icon.Shelf-${versionName}.pkg`
      );
      setMacSiliconURL(
        `https://github.com/Icon-Shelf/icon-shelf/releases/download/${tagName}/Icon.Shelf-${versionName}-arm64.pkg`
      );

      setWinURL(
        `https://github.com/Icon-Shelf/icon-shelf/releases/download/${tagName}/Icon.Shelf.Setup.${versionName}.exe`
      );

      setLinuxURL(
        `https://github.com/Icon-Shelf/icon-shelf/releases/download/${tagName}/Icon.Shelf-${versionName}.AppImage`
      );
    })();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-20 md:flex-row">
      <DownloadItem
        action={
          <Dropdown
            overlay={
              <div>
                <Dropdown.Item className="border-b">
                  <a href={macURL} className="w-full text-center">
                    For Mac with Intel processors
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a href={macSiliconURL} className="w-full text-center">
                    For Mac with Apple M1
                  </a>
                </Dropdown.Item>
              </div>
            }
          >
            <Button size="large" className="w-full">
              Download for mac
            </Button>
          </Dropdown>
        }
      >
        <AppleLogo />
      </DownloadItem>

      <DownloadItem
        action={
          <a href={winURL}>
            <Button size="large" className="w-full">
              Download for Windows
            </Button>
          </a>
        }
      >
        <WindowsLogo />
      </DownloadItem>

      <DownloadItem
        action={
          <a href={linuxURL}>
            <Button size="large" className="w-full">
              Download for Linux
            </Button>
          </a>
        }
      >
        <LinuxLogo />
      </DownloadItem>
    </div>
  );
};

export default DownloadList;
