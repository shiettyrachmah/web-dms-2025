// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
      labels: divisionLabels,
      datasets: [{
          data: divisionValues,
          backgroundColor: [
              '#4e73df', '#1cc88a', '#36b9cc',
              '#f6c23e', '#e74a3b', '#858796', '#5a5c69'
          ],
          hoverBackgroundColor: [
              '#2e59d9', '#17a673', '#2c9faf',
              '#dda20a', '#be2617', '#6c757d', '#42444d'
          ],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
      }]
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
        caretPadding: 10,
        callbacks: {
            label: function (context) {
                return context.label + ": " + context.raw + " GB";
            }
        }
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});


//Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
//Chart.defaults.global.defaultFontColor = '#858796';

//const ctxPie = document.getElementById("myPieChart");
//// Pie Chart Example
//var ctx = document.getElementById("myPieChart");
//var myPieChart = new Chart(ctx, {
//    type: 'doughnut',
//    data: {
//        labels: divisionLabels,
//        datasets: [{
//            data: divisionValues,
//            backgroundColor: [
//                '#4e73df', '#1cc88a', '#36b9cc',
//                '#f6c23e', '#e74a3b', '#858796', '#5a5c69'
//            ],
//            hoverBackgroundColor: [
//                '#2e59d9', '#17a673', '#2c9faf',
//                '#dda20a', '#be2617', '#6c757d', '#42444d'
//            ],
//            hoverBorderColor: "rgba(234, 236, 244, 1)"
//        }]
//    },
//    options: {
//        maintainAspectRatio: false,
//        tooltips: {
//            backgroundColor: "rgb(255,255,255)",
//            bodyFontColor: "#858796",
//            borderColor: '#dddfeb',
//            borderWidth: 1,
//            xPadding: 15,
//            yPadding: 15,
//            displayColors: false,
//            caretPadding: 10,
//            callbacks: {
//                label: function (context) {
//                    return context.label + ": " + context.raw + " GB";
//                }
//            }
//        },
//        legend: {
//            display: false
//        },
//        cutoutPercentage: 80,
//    },
//});