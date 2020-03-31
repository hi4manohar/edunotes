import moment from "moment";

export const momentFilter = {
  dateFormat(date, format = null) {
    return format === null
      ? moment(date, "YYYY-MM-DD").format("DD MMM YYYY")
      : "";
  }
};
