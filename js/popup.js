const gToolList = {
    1: {
        "name": "开发相关",
        "childList": [
            {
                "id": 101,
                "name": "json串处理"
            },
            {
                "id": 102,
                "name": "随机数生成"
            },
            {
                "id": 103,
                "name": "md5"
            },
            {
                "id": 103,
                "name": "日期转换"
            }
        ]
    },
    2: {
        "name": "查询相关",
        "childList": [
            {
                "id": 201,
                "name": "身份证真伪查询"
            },
            {
                "id": 202,
                "name": "查询字符串长度"
            }
        ]
    },
    3: {
        "name": "生成相关",
        "childList": [
            {
                "id": 301,
                "name": "二维码生成"
            }
        ]
    }
};

$(document).ready(function () {
    initSelectCategory();

    $('#sCategory').change(function () {
        initSelectTool();
    });
});

function initSelectCategory() {
    $('#sCategory').empty();
    $('#sCategory').append('<option value="" disabled selected>请选择类别</option>');

    for (var key in gToolList) {
        $('#sCategory').append('<option value="' + key + '">' + gToolList[key]['name'] + '</option>');
    }
}

function initSelectTool() {
    console.log('select');
    var list = gToolList[$('#sCategory').val()].childList;
    $('#sTool').empty();
    $('#sTool').append('<option value="" disabled selected>请选择工具</option>');
    list.map(function (item) {
        $('#sTool').append('<option value="' + item['id'] + '">' + item['name'] + '</option>');
    });

    $('#sTool').prop("disabled", false);
}

function loadPage() {
    
}