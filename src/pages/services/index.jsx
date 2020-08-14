import React from "react";

import "../../style/services.css";

import Sections from "../../components/Sections";

class Services extends React.Component {
  render() {
    return (
      <main id="content" itemScope>
          <div className="what">
          <h1>What are our services?</h1>
          <h3>The following section will explain this briefly!</h3></div>
        <Sections
          data={[
            {
              title: "Why us?",
              description: "We are always available and will setup your server in around 30 seconds! We also provide great integration for your already existing software, using our API you can extract data from our servers that is about your services!"
            },
            {
                title: "Our websites?",
                description: "Professional sites build in Typescript with React to fit your needs!"
            },
            {
                title: "Game servers!",
                description: "We all love to game, therefore our game servers have advanced statistics and cross network compatibility."
            },
            {
                title: "Discord bots",
                description: "Having a custom discord bot adds a level of professionalism to your discord server, using our generator you will have a discord bot available that fits your needs in no time! If you want to have something more custom (eg for API integration) you can always contact our developer!"
            },
          ]}
        />
      </main>
    );
  }
}

export default Services;
