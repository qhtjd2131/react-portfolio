
interface Theme {
  [index : string ] : string;
  size_4: string;
  size_5: string;
  size_6: string;
  size_7: string;
  size_8: string;
  size_9: string;
  size_10: string;
  size_11: string;
  size_12: string;
  size_13: string;
  size_14: string;
  sidebar_width: string;
  page_header_height : string;
}
const theme : Theme= {
  size_4: "only screen and (max-width: 400px)",
  size_5: "only screen and (max-width: 500px)",
  size_6: "only screen and (max-width: 600px)",
  size_7: "only screen and (max-width: 700px)",
  size_8: "only screen and (max-width: 800px)",
  size_9: "only screen and (max-width: 900px)",
  size_10: "only screen and (max-width: 1000px)",
  size_11: "only screen and (max-width: 1100px)",
  size_12: "only screen and (max-width: 1200px)",
  size_13: "only screen and (max-width: 1300px)",
  size_14: "only screen and (max-width: 1400px)",
  sidebar_width : "300px",
  page_header_height : "100px",
};

export default theme;
