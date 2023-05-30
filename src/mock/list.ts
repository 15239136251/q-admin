import { Random } from "mockjs"
const icons = [
  'House',
  'Notification',
  'Setting',
  'Clock',
  'Position',
  'Discount',
  'Odometer',
  'ChatSquare',
  'ChatRound',
  'Edit',
  'Message'
]
const list = [
  /* 列表 */
  {
    url: '/api/list/base',
    type: 'post',
    response: (options: any) => {
      const { body } = options
      const { page, pageSize } = JSON.parse(body)
      console.log("🚀 ~ file: login.ts:8 ~ options:", options)
      const data: any = {
        page,
        pageSize,
      }
      const key = `data|${page}-${pageSize}`
      data[key] = [{
        'id|+1': 1,
        'icon': icons[Random.integer(0, 10)],
        'name': '王二',
        'docno': 'DA' + Random.integer(1000000000000, 9999999999999),
        'city': 'Los Angeles',
        'address': 'No. ' + Random.integer(0, 10) + ', Grove St, Los Angeles',
        'createTime': Random.datetime(),
        'createName': 'root',
        'modifyTime': Random.datetime(),
        'modifyName': 'root',
        'isActive': Random.boolean(),
        'status': Random.integer(0, 2)
      }]
      return {
        code: 100,
        msg: '请求成功!',
        data
      }
    }
  },
]

export default list