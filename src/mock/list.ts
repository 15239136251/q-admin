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
const xing = ["赵", "钱", "孙", "李", "周", "吴", "郑", "王"]
const names = ["澄邈", "德泽", "海超", "海阳", "海荣", "海逸", "海昌", "瀚钰", "瀚文", "涵亮", "涵煦", "明宇", "涵衍", "浩皛", "浩波", "浩博"]

const list = [
  /* 基础列表 */
  {
    url: '/api/list/base',
    type: 'post',
    response: (options: any) => {
      const { body } = options
      const { page = 1, pageSize = 30 } = JSON.parse(body)
      const data: any[] = []
      for (let i = 0; i < pageSize; i++) {
        const value = {
          id: i + 1,
          name: xing[Random.integer(0, xing.length - 1)] + names[Random.integer(0, names.length - 1)],
          docno: 'DA' + Random.integer(1000000000000, 9999999999999),
          city: 'Los Angeles',
          address: 'No. ' + Random.integer(0, 10) + ', Grove St, Los Angeles',
          createTime: Random.datetime(),
          createName: 'root',
          modifyTime: Random.datetime(),
          modifyName: 'root',
          isActive: Random.boolean(),
          status: Random.integer(0, 2)
        }
        data.push(value)
      }
      return {
        code: 100,
        msg: '请求成功!',
        data: {
          page,
          pageSize,
          data
        }
      }
    }
  },
   /* 卡片列表 */
   {
    url: '/api/list/card',
    type: 'post',
    response: (options: any) => {
      const { body } = options
      const { page = 1, pageSize = 30 } = JSON.parse(body)
      const data: any[] = []
      for (let i = 0; i < pageSize; i++) {
        const value = {
          id: i + 1,
          icon: icons[Random.integer(0, icons.length - 1)],
          title: Random.cparagraph(1),
          description: Random.cparagraph(1, 3),
          key: Random.cword('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
          status: Random.integer(0, 2)
        }
        data.push(value)
      }
      return {
        code: 100,
        msg: '请求成功!',
        data: {
          page,
          pageSize,
          data
        }
      }
    }
  },
]

export default list