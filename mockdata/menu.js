const menus = [
    {
        "key": "sub1",
        "name": "会议报名管理",
        "icon": "appstore",
        "submenu": [
            {
                "key": "2",
                "name": "创建会议",
                "link":"create-meeting"
            },
            {
                "key": "3",
                "name": "会议列表",
                "link":"meeting-list"
            },
            {
                "key": "5",
                "name": "报名统计",
                "link":"apply-form-list"
            }
        ]
    },
    // {
    //     "key": "sub2",
    //     "name": "报名表管理",
    //     "icon": "flag",
    //     "submenu": [
    //         {
    //             "key": "4",
    //             "name": "创建报名表",
    //             "link":"create-apply-form"
    //         },
    //         {
    //             "key": "5",
    //             "name": "历史报名表",
    //             "link":"apply-form-list"
    //         }
    //     ]
    // },
    // {
    //     "key": "sub3",
    //     "name": "签到管理",
    //     "icon": "user",
    //     "submenu": [
    //         {
    //             "key": "6",
    //             "name": "报名统计",
    //             "link":"registration-statistics"
    //         },
    //         {
    //             "key": "7",
    //             "name": "签到统计",
    //             "link":"sign-in-statistics"
    //         }
    //     ]
    // },
    {
        "key": "sub2",
        "name": "系统管理",
        "icon": "setting",
        "submenu": [
            {
                "key": "8",
                "name": "修改密码",
                "link":"edit-account-info"
            },
            {
                "key": "9",
                "name": "账号信息",
                "link":"edit-password"
            }
        ]
    }
]

module.exports = menus