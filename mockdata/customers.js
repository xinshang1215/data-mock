const Mock = require('mockjs')
const customers = Mock.mock({
    'array|1-10':[
        {
            'id|+1':1001,
            'name|+1':[
                '赵钱','孙李','周吴','郑王','冯陈','褚卫','蒋沈','韩杨','朱秦','尤许','何吕','施张'
            ],
            'phone|18612345678-18612345600':18612345600,
            'company|+1':[
                'XX科技','XX信息科技','XX生物科技','XX电子科技'
            ],
            'job|+1':[
                '总经理','IT主管','人事','财务','销售总监','生产总监','部长','次长','车间主任'
            ],
            'meeting|+1':[
                '大数据生态大会','AI与未来生活研讨会'
            ],
            'status|1-2':true
        }
    ]
})
module.exports = customers