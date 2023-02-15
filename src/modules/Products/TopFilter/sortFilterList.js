const sortFilterList = [
  {
    label: 'Phổ biến',
    sortFunc(list) {
      list.sort(function (a, b) {
        return b.rating - a.rating;
      });
      return list;
    },
  },
  {
    label: 'Mới nhất',
    sortFunc(list) {
      list.reverse();
      return list;
    },
  },
  {
    label: 'A-Z',
    sortFunc(list) {
      list.sort(function (a, b) {
        var title1 = a.title.toLowerCase();
        var title2 = b.title.toLowerCase();
        return title1.localeCompare(title2);
      });
      return list;
    },
  },
  {
    label: 'Z-A',
    sortFunc(list) {
      list.sort(function (a, b) {
        var title1 = a.title.toLowerCase();
        var title2 = b.title.toLowerCase();
        return title1.localeCompare(title2);
      });
      list.reverse();
      return list;
    },
  },
];

export default sortFilterList;
