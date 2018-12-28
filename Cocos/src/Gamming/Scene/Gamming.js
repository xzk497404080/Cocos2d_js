var Gamminglayer = cc.Layer.extend({

    Game:null,

    Plane:null,

    ctor(){
        this._super();

        Game = ccs.load(res.GameBGScene_json);
        this.addChild(Game.node);
        cc.log(Game);
        Plane = Game.node.getChildByName("Sprite_1");
        cc.log(Plane.size);
        cc.log(Plane.y);
        cc.log(Plane.getBoundingBox());


        Plane.runAction(cc.moveTo(2,Game.node.width/2,Game.node.height*0.8));

        this.touchListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            /*
            可选event类型列表:

            cc.EventListener.TOUCH_ONE_BY_ONE (单点触摸)
            cc.EventListener.TOUCH_ALL_AT_ONCE (多点触摸)
            cc.EventListener.KEYBOARD (键盘)
            cc.EventListener.MOUSE (鼠标)
            cc.EventListener.ACCELERATION (加速计)
            cc.EventListener.CUSTOM (自定义)

            */
            swallowTouches: true,　　// 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
            onTouchBegan:function(touch,event)    //实现 onTouchBegan 事件处理回调函数
            {
                // 19         20

                var target = event.getCurrentTarget();  // 获取事件所绑定的 target, 通常是cc.Node及其子类

                // 获取当前触摸点相对于按钮所在的坐标
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                if (cc.rectContainsPoint(rect, locationInNode)) {       // 判断触摸点是否在按钮范围内
                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    target.opacity = 180;
                    return true;
                }
                else{
                    cc.log("No...  x = "+locationInNode.x +", y = "+ locationInNode.y);

                }

            },

            onTouchMoved:function(touch,event)   //实现onTouchMoved事件处理回调函数, 触摸移动时触发
            {
                var target = event.getCurrentTarget();
                var delta = touch.getDelta();              //获取事件数据: delta
                target.x += delta.x;
                target.y += delta.y;

            },

            onTouchEnded:function(touch,event)// 实现onTouchEnded事件处理回调函数
            {
                var target = event.getCurrentTarget();
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                cc.log("sprite onTouchesEnded.. ");
                target.setOpacity(255);
                // if (target == sprite2) {
                //     sprite1.setLocalZOrder(100);            // 重新设置 ZOrder，显示的前后顺序将会改变
                // } else if (target == sprite1) {
                //     sprite1.setLocalZOrder(0);
                // }
                cc.log("End  x = "+locationInNode.x +", y = "+ locationInNode.y);

            }
        });


        cc.eventManager.addListener(this.touchListener, Plane);

        // cc.eventManager.addListener(this.touchListener,1);　　// 添加监听器到管理器
        /*
        这里的cc.eventManager 是一个单例对象，可直接拿来使用。
        通过调用 addListener 函数可以将listener加入到管理器中。
        需要注意的是第二个参数
        如果传入的是一个Node对象，则加入的是SceneGraphPriority(精灵以显示优先级) 类型的listener
        如果是一个数值类型的参数，则加入到的是FixedPriority 类型的listener。
        */


    },






});

var GammingScene = cc.Scene.extend({
    onEnter(){
        this._super();
        var layer = new Gamminglayer();
        this.addChild(layer);
    }

});