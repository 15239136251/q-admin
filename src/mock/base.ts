import { Random } from "mockjs"

const base = [
  {
    url: '/api/base/zr_0',
    type: 'post',
    response: (options: any) => {

      return {
        code: 100,
        msg: '请求成功!',
        data: {
          title: {
            text: 'Stacked Line'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Email', 'Union Ads']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              data: [Random.natural(50, 500), Random.natural(50, 500), Random.natural(50, 500), Random.natural(50, 500), Random.natural(50, 500), Random.natural(50, 500), Random.natural(50, 500)]
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              data: [Random.natural(50, 500), Random.natural(50, 500), Random.natural(50, 500), Random.natural(50, 500), Random.natural(50, 500), Random.natural(50, 500), Random.natural(50, 500)]
            }
          ]
        }
      }
    }
  },
  {
    url: '/api/base/zr_1',
    type: 'post',
    response: (options: any) => {

      return {
        code: 100,
        msg: '请求成功!',
        data: {
          title: {
            text: '饼图'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 16,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: Random.natural(100, 1500), name: 'Search Engine' },
                { value: Random.natural(100, 1500), name: 'Direct' },
                { value: Random.natural(100, 1500), name: 'Email' },
                { value: Random.natural(100, 1500), name: 'Union Ads' },
                { value: Random.natural(100, 1500), name: 'Video Ads' }
              ]
            }
          ]
        }
      }
    }
  },
  {
    url: '/api/base/zr_2',
    type: 'post',
    response: () => {
      return {
        code: 100,
        msg: '请求成功!',
        data: {
          legend: {},
          tooltip: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          dataset: {
            source: [
              ['product', '出库', '入库'],
              ['2023-05-21', Random.natural(400, 1500), Random.natural(400, 1500)],
              ['2023-05-22', Random.natural(400, 1500), Random.natural(400, 1500)],
              ['2023-05-23', Random.natural(400, 1500), Random.natural(400, 1500)],
              ['2023-05-24', Random.natural(400, 1500), Random.natural(400, 1500)],
              ['2023-05-25', Random.natural(400, 1500), Random.natural(400, 1500)],
              ['2023-05-26', Random.natural(400, 1500), Random.natural(400, 1500)],
              ['2023-05-27', Random.natural(400, 1500), Random.natural(400, 1500)],
            ]
          },
          xAxis: { type: 'category' },
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [{ type: 'bar' }, { type: 'bar' }]
        }
      }
    }
  }
]

export default base