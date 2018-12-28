var SGTouchLayer = cc.Layer.extend({

    ctor:function(){
        this._super();

        var Menu = ccs.load(res.StartTouchScene_json);
        this.addChild(Menu.node);

        var StartButton = Menu.node.getChildByName("Button_1");
        StartButton.addClickEventListener(function(){
            cc.LoaderScene.preload(g_resources, function () {
                cc.director.runScene(new GammingScene());
            }, this);
            cc.log("start");
        });
        var SettingButton = Menu.node.getChildByName("Button_1_0");
        SettingButton.addClickEventListener(function(){
            cc.log("Setting");
        });
        var AboutButton = Menu.node.getChildByName("Button_1_1");
        AboutButton.addClickEventListener(function(){
            cc.log("About");
        });
    }
});
