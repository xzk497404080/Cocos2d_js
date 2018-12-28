var SGBackgroundLayer = cc.Layer.extend({

    ball:null,
    StartBGScene:null,
    ctor :function(){
        this._super();

        // cc.spriteFrameCache.addSpriteFrames(res.TextureTran)

        StartBGScene = ccs.load(res.StartBGScene_json);
        this.addChild(StartBGScene.node);


        ball = StartBGScene.node.getChildByName("Sprite_7");


        ball.runAction(cc.moveBy(
            2,
            cc.p(Math.random()*StartBGScene.node.width,StartBGScene.node.height-ball.y)
            // parseInt(5*Math.random(),10),
            // cc.p(Math.random()*StartBGScene.node.width,StartBGScene.node.height)
        ));

        this.schedule(this.update,0.1);


        // var button = mainscene.getChildByName("");
        // var button = mainscene.node.getChildByName("Button_5");
        // var node = mainscene.node.getChildByName("FileNode_3");
        // button.setActionManager(function(){
        //     cc.log("clicked");
        // });
        // button.addTouchEventListener(function () {
        //    cc.log("clicked");
        // });
        // cc.log(button);
        // cc.log(node);
    },
    update(){/////???????
        // cc.log(StartBGScene.node.width);
        // cc.log(StartBGScene.node.height);


        if(ball.x > StartBGScene.node.width||ball.y>StartBGScene.node.height){
            ball.x=Math.random()*StartBGScene.node.width;
            ball.y=10;
            // cc.log(ball.x);
            ball.runAction(cc.moveBy(
                5,
                cc.p(Math.random()*StartBGScene.node.width,StartBGScene.node.height)
                // parseInt(5*Math.random(),10),
                // cc.p(Math.random()*StartBGScene.node.width,StartBGScene.node.height)
            ));
        }



        // cc.log("update");
    }
});

