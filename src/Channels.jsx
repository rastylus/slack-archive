import channels from "./assets/slack/channels.json";
import React, { useState } from "react";

const ChannelCard = ({ channel }) => {
  const [cardIsOpen, setCardIsOpen] = useState(false);
  const { id, name } = channel;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: 2 }}
      key={id}
    >
      {/* Name button opens panel */}
      <div
        style={{ backgroundColor: "aliceblue", padding: 2 }}
        onClick={() => setCardIsOpen(!cardIsOpen)}
      >
        {name}
      </div>
      {cardIsOpen && <div>{id}</div>}
    </div>
  );
};

const Channels = () => {
  return (
    <div>
      {channels.map((c) => {
        console.log("c", c);
        return <ChannelCard channel={c} />;
      })}
    </div>
  );
};

export default Channels;
