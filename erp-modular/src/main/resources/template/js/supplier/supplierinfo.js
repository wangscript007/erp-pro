layui.config({
    base: basePath,
    version: skyeyeVersion
}).extend({  //指定js别名
    window: 'js/winui.window',
}).define(['window', 'table', 'jquery', 'winui'], function (exports) {
    winui.renderColor();
    layui.use(['form'], function (form) {
        var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
        var $ = layui.$;
        var simpleTemplate = $("#simpleTemplate").html();
        showGrid({
            id: "showForm",
            url: reqBasePath + "supplier008",
            params: {rowId: parent.rowId},
            pagination: false,
            template: simpleTemplate,
            ajaxSendAfter:function(json){
                $("#enabled").html(json.bean.enabled == "1" ? "<span class='state-up'>启用</span>" : "<span class='state-down'>禁用</span>");
                form.render();
            }
        });

        $("body").on("click", "#cancle", function(){
            parent.layer.close(index);
        });
    });
});