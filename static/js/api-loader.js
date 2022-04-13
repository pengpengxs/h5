/**
 * Created by Administrator on 2017/4/12.
 */
var mapConfig = {
    path: "",
    modulePath: "",
    imagePath: "",
    tilePath: "",
    tileExt: ".jpg"
};

/**
 * 获取路径的父路径
 *
 * @param path
 * @return {string}
 */
function getParentPath(path) {
    return path.substr(0, path.lastIndexOf("/"));
}

(function() {
    var scripts = document.getElementsByTagName("script");
    var path = scripts[scripts.length - 1].getAttribute("src");

    mapConfig.path = getParentPath(getParentPath(path)) + "/";
    mapConfig.modulePath = mapConfig.path + "js/modules/";
    mapConfig.imagePath = mapConfig.path + "images/";
    mapConfig.tilePath = mapConfig.path + "tiles/";

    // 加载API
    window.BMap_loadScriptTime = (new Date).getTime();
    document.write('<script type="text/javascript" src="'+ mapConfig.path + '/js/api.js"></script>');
})();