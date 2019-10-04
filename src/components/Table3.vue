<template>
  <div class="small">
    <h1 class="title_chart">{{ title }}</h1>
    <line-chart :chart-data="datacollection" :height="300"></line-chart>
  </div>
</template>

<script>
import LineChart from "../LineChart.js";

export default {
  name: "table3",
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: {
        labels: [
          "BDP 1.3%",
          "BMU 77.8%",
          "BPY 2.0%",
          "EFV 1.5%",
          "IFD 0.0%",
          "CAC 3.5%",
          "BPU 13.9%"
        ],
        datasets: [
          {
            label: "Data One",
            data: [2352, 139514, 3540, 2731, 0, 6353, 24926],
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
        "Tabla N° 3 Número de entidades y total depósitos (expresado en millones de bolivianos)"
    };
  }
};
</script>
