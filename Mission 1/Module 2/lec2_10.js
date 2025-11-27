

// Binning (Resampling) Time series Data

// Scenario: You have a long list of user click events
// You need to "bin" these events into 30-minute intervals to analyze user activity over time.

//? input 
const clickEvents = [
  { timestamp: "2024-01-01T09:05:00Z", type: "click" },
  { timestamp: "2024-01-01T09:15:00Z", type: "scroll" }, 
  { timestamp: "2024-01-01T09:25:00Z", type: "click" },
  { timestamp: "2024-01-01T09:45:00Z", type: "click" },
  { timestamp: "2024-01-01T10:05:00Z", type: "scroll" },
  { timestamp: "2024-01-01T10:15:00Z", type: "click" },
  { timestamp: "2024-01-01T10:35:00Z", type: "click" },
];

//? output
// binnedEvents = {
//   "2024-01-01T09:00:00Z": {total: 3},
//   "2024-01-01T09:30:00Z": {total: 1},
//   "2024-01-01T10:00:00Z": {total: 2},
//   "2024-01-01T10:30:00Z": {total: 1}
// }