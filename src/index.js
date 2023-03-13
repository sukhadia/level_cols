import "./styles.css";

const list = ["l1_name", "l3_name", "foo", "bar"];

const insertLevelCol = (colNm, pattern = /l[\d]+_name/) => {
  const levelColList = [];
  const otherCols = [];

  list.forEach((item) => {
    if (pattern.test(item)) {
      levelColList.push(item);
    } else {
      otherCols.push(item);
    }
  });

  levelColList.push(colNm);
  levelColList.sort(compareCols);

  return [...levelColList, ...otherCols];
};

const extractNumFromString = (thestring) => thestring.replace(/^\D+/g, "");

const compareCols = (colA, colB) => {
  const numA = extractNumFromString(colA);
  const numB = extractNumFromString(colB);

  if (numA < numB) {
    return -1;
  } else if (numA > numB) {
    return 1;
  } else {
    return 0;
  }
};

console.log(insertLevelCol("l4_name"));
