var StartGameLayer = cc.Layer.extend({
    _backgroundLayer :null,
    _touchLayer :null,
    ctor:function(){
        this._super();
        this.addBackGroundLayer();
        this.addTouchLayer();
    },

    addBackGroundLayer(){
        this._backgroundLayer = new SGBackgroundLayer();
        this.addChild(this._backgroundLayer);
    },

    addTouchLayer(){

        this._touchLayer = new SGTouchLayer();
        this.addChild(this._touchLayer);
    },


});

var StartGameScene = cc.Scene.extend({
    onEnter(){
        this._super();
        var layer = new StartGameLayer();
        this.addChild(layer);
    }
});

// "src/StartGame/Scene/StartGame.js",
//     "src/StartGame/Layer/SGBackground.js",
//     "src/StartGame/Layer/SGTouchLayer.js",