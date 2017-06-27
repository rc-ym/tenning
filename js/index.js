$(function(){
    var optiarcSubnav=$(".optiarc .subnav");
    var optiarcList=$(".optiarc .list");
    fzclick(optiarcSubnav,optiarcList);
    var articleSubnav=$(".article .subnav");
    var articleList=$(".article .list");
    fzclick(articleSubnav,articleList);
    var sourceBtnLi=$(".sourceCode .source-btn li");
    var sourceContent=$(".sourceCode .source .content");
    fzclick(sourceBtnLi,sourceContent);
    var softwareBtnLi=$(".software .software-btn li");
    var softwareContent=$(".software .software-box .content");
    fzclick(softwareBtnLi,softwareContent);
});
function fzclick(btn,content){
    var num=1;
    content.eq(0).css('zIndex',1);
    btn.click(function(){
        num++;
        btn.eq($(this).index()).addClass("active").siblings().removeClass('active');
        content.eq($(this).index()).css("zIndex",num);
    })
}