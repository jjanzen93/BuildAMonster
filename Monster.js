class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.darkEye = this.add.sprite(this.bodyX + 35, this.bodyY - 50, "monsterParts", "eye_psycho_dark.png");
        my.sprite.lightEye = this.add.sprite(this.bodyX - 35, this.bodyY - 50, "monsterParts", "eye_psycho_light.png");

        my.sprite.rightArm = this.add.sprite(this.bodyX + 100, this.bodyY - 75, "monsterParts", "arm_blueA.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX - 100, this.bodyY - 75, "monsterParts", "arm_blueA.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.leftArm.flipY = true;
        my.sprite.rightArm.flipY = true;

        my.sprite.rightLeg = this.add.sprite(this.bodyX + 75, this.bodyY + 150, "monsterParts", "leg_greenA.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 75, this.bodyY + 150, "monsterParts", "leg_greenA.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.rightAntenna = this.add.sprite(this.bodyX + 30, this.bodyY - 110, "monsterParts", "detail_red_antenna_large.png");
        my.sprite.leftAntenna = this.add.sprite(this.bodyX - 30, this.bodyY - 110, "monsterParts", "detail_red_antenna_large.png");
        my.sprite.leftAntenna.flipX = true
    
        my.sprite.closedSmile = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "mouth_closed_happy.png");
        my.sprite.closedFangs = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.closedFangs.visible = false;  
        
        // set up keybinds

        my.s_key = this.input.keyboard.addKey('S');
        my.f_key = this.input.keyboard.addKey('F');
        my.a_key = this.input.keyboard.addKey('A');
        my.d_key = this.input.keyboard.addKey('D');
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (my.s_key.isDown) {
            my.sprite.closedFangs.visible = false;
            my.sprite.closedSmile.visible = true;
        }

        if (my.f_key.isDown) {
            my.sprite.closedSmile.visible = false;
            my.sprite.closedFangs.visible = true;
        }

        if (my.a_key.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x -= 5;
            }
        }

        if (my.d_key.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += 5;
            }

        }
    }

}