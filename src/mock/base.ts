
const login = [
  /* loginUser */
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
              data: [120, 132, 101, 134, 400, 230, 210]
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              data: [220, 182, 191, 234, 290, 330, 310]
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
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
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
              ['2023-05-21', 43, 85],
              ['2023-05-22', 83, 73],
              ['2023-05-23', 86, 65],
              ['2023-05-24', 72, 43],
              ['2023-05-25', 70, 2],
              ['2023-05-26', 42, 63],
              ['2023-05-27', 22, 52],
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

export default login