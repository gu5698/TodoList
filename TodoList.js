// function TodoList() {
//     this.list = [];
//     this.add_list = function (even) { }
//     this.get_list = function () {
//         return this.list;
//     }
// }

// function Even(id, content, ctime, finished) {
//     this.id = id;
//     this.content = content;
//     this.ctime = ctime;
//     this.finished = finished;
//     //時間戳記
//     var Unix_timestamp = Math.round(new Date().getTime() / 1000);
//     //戳記回一般時間
//     var unixTimestamp = new Date(Unix_timestamp * 1000);
//     var commonTime = unixTimestamp.toLocaleString();

// }
//把todolist顯示在畫面上
var all_data = {};

function get_list() {
    $.ajax({
        url: 'https://z20240-les-lee.com/todo/',
        type: 'GET',
        data: {

        },
        error: function (xhr) {
            alert('錯誤')
        },
        success: function (response) {
            var list = response.value;
            for (var i = 0; i < response.value.length; i++) {
                var content = response.value[i].content;
                var ctime = response.value[i].ctime;
                var unixTimestamp = new Date(ctime * 1000);
                var commonTime = unixTimestamp.toLocaleString();
            }
            
            all_data = response;

            var selstring = "";
            selstring += "<select id = \"sel_id\" >"
            selstring += "<option value = \"-1\" >--</option>";
            for (var i = 0; i < list.length; i++){
                selstring += "<option value = " + list[i].id + ">" + list[i].id + "</option>"
            }
            selstring += "</select>"
            $( "#sel_id" ).html( selstring );

            var htmlstring = "";
            for (var i = 0; i < list.length; i++) {
                htmlstring += "<ul>"
                htmlstring += "<input type=\"checkbox\" id = \"put" + list[i].id + "\"" + " " +  "onclick= \"put_list (" + all_data.value[i].finished + "," + list[i].id + ")\"" +"/>"
                htmlstring += "<span id = \"txt" + list[i].id + "\">" + list[i].content + "</span>";
                htmlstring += "<button type = \"button\" id = \"delete" + list[i].id + "\"" + " " + "onclick= \"del_list (" + list[i].id + ")\"" + ">delete</button>"
                htmlstring += "</ul>"              
            }
            console.log(all_data);
            
            $("#myApp").html( htmlstring );
        }
    })
}

function post_list() {
    $.ajax({
        url: 'https://z20240-les-lee.com/todo/',
        type: 'POST',
        data: {
            // content
            "content": $("textarea").val()
        },
        error: function (xhr) {
            alert('錯誤')
        },
        success: function (response) {
            console.log(response)
        }
    })
}

function put_list(num, id) {
    console.log("當我點下去時，num:", num, " id:", id);
    //console.log(' ==================SUCCESS================= ');
            //console.log("輸入值onclick= put_list (#txt4,0,4)，此時應為#txt4:"+str)
            console.log("未設定 prop 前之值，此時應為 undefined: " + $(this).prop('checked'));
            if( !$(this).prop('checked') ){
                console.log("==> [進入 !checked 的判斷式]");

                $('#txt'+id).css("text-decoration", "line-through");
                $(this).prop('checked',true);
                
                console.log("設值後的值，此時 prop 應為true:"+ $(this).prop('checked'));
                
                num = 1;
                console.log("輸入時的id，此時應為4:"+id);
                console.log("輸入時的num，此時 num 應為0:" + num, " all_data.value["+id+"].finished :", all_data.value[id].finished );
                console.log("被設值後的全域response存檔，應設置為1："+all_data.value[id].finished);
                //console.log(this)
            }else if( $(this).prop('checked') ){
                console.log("==> ==> [進入 checked 的判斷式]");
                console.log($(this).prop('checked'))
                $('#txt'+id).css("text-decoration", "none");
                $(this).prop('checked',false)
                console.log( $(this).prop('checked'))
                num = 0;
                //num = 0;
                //console.log($("#put2").prop('checked'))
                console.log(id)
                console.log(num)
                console.log(all_data.value[id].finished)
            }
    $.ajax({
        url: 'https://z20240-les-lee.com/todo/finished/' + id + '/' + num ,
        type: 'PUT',
        data: {
        },
        error: function (xhr) {
            alert('錯誤')
        }, 
        success: function (response) {  
            console.log ('成功')
        }
    })
}
function chg_list() {

    $.ajax({
        url: 'https://z20240-les-lee.com/todo/content/',
        type: 'PUT',
        async : false,
        //非同步，用此種方式可以在傳回資料後才進行下一步。速度 post > get > put
        data: {
            "id": $("#sel_id").val(),
            "content": $("textarea").val()
        },
        error: function (xhr) {
            alert('錯誤')
        },
        success: function (response) {
            console.log("true");
            console.log($("#sel_id").val());
            console.log($("textarea").val());
        }
    })
}
function del_list(num) {
    $.ajax({
        url: 'https://z20240-les-lee.com/todo/'+num,
        type: 'DELETE',
        data: {
            id: num
        },
        error: function (xhr) {
            alert('錯誤')
        },
        success: function (response) {
            console.log("true");
            get_list();
        }
    })
}


$(function () {

    get_list();

    $("#input").click(function () {
        console.log("[input click] select id :",  $("#sel_id").val());
        console.log('OK');
        if ( $("#sel_id").val() == -1 ){
            post_list();
            console.log("post");
        } else if ( $("#sel_id").val() != -1 ){
            chg_list();
            console.log("chg");
        }
        get_list();
    });

});