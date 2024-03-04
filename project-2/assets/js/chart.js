
const global = document.getElementById('global');

const datas = {
  labels: [
    'Biznes',
    'Məlumat elmi',
    'Texnologiya',
    'Qadın öyrənənlər',
    'Mobildə öyrənənlər'
  ],
  datasets: [{
    label: 'Isvec',
    data: [96, 77, 99, 44, 34],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
    ],
    borderWidth: 1
  },
  {
    label: 'Ispaniya',
    data: [48, 97, 100, 50, 41],
    backgroundColor: [
      'rgba(75, 192, 192, 0.2)',
    ],
    borderColor: [
      'rgb(75, 192, 192)',
    ],
    borderWidth: 1
  }
    ,
  {
    label: 'Almaniya',
    data: [93, 92, 84, 41, 40],
    backgroundColor: [
      'rgba(255, 205, 86, 0.2)',
    ],
    borderColor: [
      'rgb(255, 205, 86)',
    ],
    borderWidth: 1
  }
  ]
};

new Chart(global, {
  type: 'bar',
  data: datas,
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || 'rr';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + '%';
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        ticks: {
          stepSize: 10,
          min: 0,
          max: 110
        }
      }
    }
  }
});



const europe = document.getElementById('europe');

const europeDatas = {
  labels: [
    'Biznes',
    'Məlumat elmi',
    'Texnologiya',
    'Qadın öyrənənlər',
    'Mobildə öyrənənlər'
  ],
  datasets: [{
    label: 'Isvec',
    data: [96, 77, 99, 44, 34],
    backgroundColor: [
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  },
  {
    label: 'Ispaniya',
    data: [48, 97, 100, 50, 41],
    backgroundColor: [
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  },
  {
    label: 'Almaniya',
    data: [93, 92, 84, 41, 40],
    borderColor: 'green',
  },
  {
    label: 'Luxemburq',
    data: [98, 95, 58, 45, 43],
    borderColor: 'green',
  }
  ]
};

new Chart(europe, {
  type: 'bar',
  data: europeDatas,
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || 'rr';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + '%';
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        ticks: {
          stepSize: 10,
          min: 0,
          max: 110
        }
      }
    }
  }
});



const northAmerica = document.getElementById('north-america');

const northAmericaDatas = {
  labels: [
    'Biznes',
    'Məlumat elmi',
    'Texnologiya',
    'Qadın öyrənənlər',
    'Mobildə öyrənənlər'
  ],
  datasets: [{
    label: 'Birləşmiş Ştatlar',
    data: [53, 32, 16, 51, 41],
    backgroundColor: [
      'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
      'rgb(153, 102, 255)',
    ],
    borderWidth: 1
  },
  {
    label: 'Kanada',
    data: [15, 48, 29, 55, 37],
    backgroundColor: [
      'rgba(54, 162, 235, 0.2)',
    ],
    borderColor: [
      'rgb(54, 162, 235)',
    ],
    borderWidth: 1
  }
  ]
};

new Chart(northAmerica, {
  type: 'bar',
  data: northAmericaDatas,
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || 'rr';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + '%';
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        ticks: {
          stepSize: 10,
          min: 0,
          max: 110
        }
      }
    }
  }
});