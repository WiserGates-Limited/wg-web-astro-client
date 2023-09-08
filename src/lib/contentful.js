/** @format */

import { createClient } from "contentful-management";

class Contentful {
  constructor(accessToken, spaceID) {
    this._accessToken = accessToken;
    // this._database = database;
    this._contentfulClient = createClient({
      accessToken: accessToken,
    });
    this._spaceID = spaceID;
    console.log("here in Contentful class constructor");
  }

  async downloadFile(fileURL) {
    // call API
    client
      .getSpace("noepe1fl3llv")
      .then((space) => space.getEnvironment("master"))
      .then((environment) =>
        environment.createEntry("leadMagnetDownloadEntry", {
          fields: {
            email: {
              "en-US": email,
            },
            fileUrl: {
              "en-US": url,
            },
          },
        })
      )
      .then((entry) => {
        console.log(entry);
        const link = document.createElement("a");
        link.href = url;
        link.download = "WiserGates - Personal Balance Sheet Template";
        document.body.appendChild(link);
        link.click();
        setIsDownloaded(true);
      })
      .catch(console.error);
  }
}

export default Contentful;
