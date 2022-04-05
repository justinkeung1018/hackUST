import React, { useState } from "react";

export default function Options() {
  const [options, setOptions] = useState([
    { option: "Location", screen: "./FilterLocationScreen", key: "1" },
    { option: "Activity", screen: "./FilterActivityScreen", key: "2" },
    { option: "Price", screen: "./FilterPriceScreen", key: "3" },
    { option: "Time", screen: "./FilterTimeScreen", key: "4" },
  ]);
  return [options, setOptions];
}
