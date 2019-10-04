<template>
  <div class="small">
    <h1 class="title_chart">{{ title }}</h1>
    <line-chart :chart-data="datacollection" :height="300" ></line-chart>
  </div>
</template>

<script>
import LineChart from '../LineChart.js';

export default {
  name: 'table1',
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: {
        labels: ['BDP 1.8%', 'BMU 76.2%', 'BPY 2%', 'EFV 1.6%', 'IFD 2.3%', 'CAC 3.6%', 'BPU 12.5%'],
        datasets: [
          {
            label: 'Data One',
            data: [
              4374,
              183957,
              4804,
              3951,
              5432,
              8600,
              30201
            ],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              '#90EE90',
              '#20B2AA',
              '#BA55D3',
              '#F4A460'
            ],
            borderAlign: 'inner'
          }
        ]
      },
      title: 'Tabla N°1 Número de entidades y total de activos \n\n(expresado en millones de bolivianos)'
    };
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 50px auto;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4); 
  border-radius: 20px;
  padding-top: 8px;
}
.title_chart {
    font-family: 'Helvetica', Arial;
    color: #464646;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 15px;
    font-size: 20px;
    margin-top: 0;
    text-align: center;
  }

</style>