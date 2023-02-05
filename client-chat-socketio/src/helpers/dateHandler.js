import moment from 'moment';

export const dateHandler = (date) => {
  const dayMonth = moment(date);

  return dayMonth.format('HH:mm a | MMMM Do');
};
