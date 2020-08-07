export default {
    areaChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: { show: false }
    },
    yaxis: [{
      y: 0,
      offsetX: 0,
      offsetY: 0,
      padding: { left: 0, right: 0 },
    }],
    tooltip: {
      x: { show: false }
    },
    },
    lineChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      type: 'line',
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 4,
        opacity: 0.10,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    xaxis: {
      type: 'numeric',
    },
    // colors: ['#7367F0'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        // gradientToColors: ['#A9A2F6'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      },
    },
    markers: {
      size: 0,
      hover: {
        size: 5
      }
    },
    tooltip: {
      x: { show: false }
    },
    },
    statisticsRadar: {
    labels: [
        'Fever', 'Shortness of breath', 'Dry Cough', 'Fatigue','Sore Throat', 'Confusion',
         'Nausea and Vomiting','Headache', 'Runny Nose', 'Chest Pain', 'Diarrhea', 'Stomach Ache'
    ],
    dataLabels: {
      style: {
        colors: ['#b9c3cd', '#b9c3cd', '#b9c3cd', '#b9c3cd', '#b9c3cd', '#b9c3cd']
      }
    },
    yaxis: {
      show: false
    },
    grid: {
      show: false
    },
    legend: { show: true },
    chart: {
      dropShadow: {
        enabled: true,
        blur: 8,
        left: 1,
        top: 1,
        // opacity: 0.2
      },
      // toolbar: {
      //   show: false
      // }
    },
    stroke: {
      width: 0
    },
    // colors: ['#9f8ed7', '#1edec5'],
    // plotOptions: {
    //   radar: {
    //     polygons: {
    //       strokeColors: ['#e8e8e8', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
    //       connectorColors: 'transparent'
    //     }
    //   }
    // },
    fill: {
      // type: 'gradient',
        opacity: 0.6,
      // gradient: {
      //   shade: 'dark',
      //   gradientToColors: ['#8e9ad6', '#1fcadb'],
      //   shadeIntensity: 1,
      //   type: 'horizontal',
      //   opacityFrom: 1,
      //   opacityTo: 1,
      //   stops: [0, 100, 100, 100]
      // }
    },
    markers: {
      size: 0
    }
    },
    bubbleChart: {
        // colors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E'],
        dataLabels: {
            enabled: false,
            position: 'right'
        },
        legend: {
            position: 'right',
            floating: true,
            offsetY: 20,
            offsetX: 10
        },
        fill: {
            type: 'gradient',
        },
        xaxis: {
            tickAmount: 12,
            type: 'category',
            labels: {
                rotate: 0,
            },
            title: {
                text: 'Total Deaths'
            },
            max: 20000,
            min: 0
        },
        yaxis: {
            min: 0,
            max: 50000,
            title: {
                text: 'Total Recovered'
            }
        },
        theme: {
            palette: 'palette2'
        }
}
}
