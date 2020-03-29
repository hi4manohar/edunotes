export const contentFilter = {
  trimmedData(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str
      .replace(/(<([^>]+)>)/gi, "")
      .trim()
      .substring(0, 100);
  }
};
