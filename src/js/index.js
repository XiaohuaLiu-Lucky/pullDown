var obj = {
    flag: false,
    // 入口函数
    init: function(ele) {
        this.ele = ele;
        $('.title').on('click', { ele: this.ele }, this.dropDown.bind(this)); //注意this指向问题。
    },
    dropDown: function(e) {
        if (!this.flag) {
            this.flag = true;
            var $ele = e.data.ele,
                $target = $(e.target),
                $next = $target.next(),
                $nextClass = $next.attr('class');
            // 展示或者隐藏改菜单，注意this指向问题
            $next.slideToggle(400, function() {
                this.flag = false;
            }.bind(this));
            // 给li添加active类。
            $target.parent().toggleClass('active');
            // 其他的同级标签收起来=》隐藏无关菜单。
            if ($nextClass === 'sub-menu1') {
                $ele.find($('.sub-menu1')).not($next).slideUp().parent().removeClass('active');
            } else if ($nextClass === 'sub-menu2') {
                $ele.find($('.sub-menu2')).not($next).slideUp().parent().removeClass('active');
            }
        }
    }
}
obj.init($('.list'))