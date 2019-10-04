<template>
  <div class="small">
    <h1 class="title_chart">{{ title }}</h1>
    <line-chart :chart-data="datacollection" :height="300"></line-chart>
  </div>
</template>

<script>
import LineChart from "../LineChart.js";

export default {
  name: "table2",
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: {
        labels: [
          "BDP 1.9%",
          "BMU 77.8%",
          "BPY 2.4%",
          "EFV 1.7%",
          "IFD 2.9%",
          "CAC 3.6%",
          "BPU 9.8%"
        ],
        datasets: [
          {
            label: "Data One",
            data: [3265, 134067, 4072, 2886, 5005, 6260, 16877],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "#90EE90",
              "#20B2AA",
              "#BA55D3",
              "#F4A460"
            ],
            borderAlign: "inner"
          }
        ]
      },
      title:
        "Tabla N° 2 Número de entidades y cartera (expresado en millones de bolivianos)"
    };
  }
};
</script>
