import moment from "moment";

const todayDate = moment().format('YYYY-MM-DD');

export const momentFilter = {
  dateFormat(date, format = null) {
    return format === null
      ? moment(date, "YYYY-MM-DD").format("DD MMM YYYY")
      : "";
  },

  getCurrentDate() {
    return moment().format('YYYY-MM-DD');
  },

  diffTodayDate(pdate) {
    return moment(todayDate).diff(moment(pdate), 'days');
  },

  getTwoDaysLater() {
    return moment().add(2, 'days').format('YYYY-MM-DD');
  }
};
