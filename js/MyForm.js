class Form
{
    constructor()
    {
        this.title = createElement("h1");
        this.input = createInput("").attribute("placeholder", "Enter Your Username");
        this.play = createButton("Play");

        this.maleButton = createButton("Male");
        this.femaleButton = createButton("Female");

        this.playerGender = 0;
    }

    display()
    {
        this.title.position(width/2 - 135, 50);
        this.title.html("Tricky Jumps");
        this.title.class("resetText");

        this.input.position(width/2-110, height/2 - 80);
        this.input.class("customInput");

        this.play.position(width/2 - 85, height-160);
        this.play.class("customButton");

        this.maleButton.position(width/2 - 190, height/2 + 80);
        this.maleButton.class("maleCustomButton");

        this.femaleButton.position(width/2 + 12, height/2 + 80);
        this.femaleButton.class("femaleCustomButton");

        this.playerButton();
    }

    playerButton()
    {
        this.maleButton.mousePressed(()=>{
            database.ref("/").update({
                Gender: 1
            });
        })
        this.femaleButton.mousePressed(()=>{
            database.ref("/").update({
                Gender: 2
            });
        });

        var x = this.input.value();

        database.ref("/").update({
            PlayerName: x
        });
        
        //console.log(x);

        this.play.mousePressed(()=>{
            database.ref("/").update({
                playButton: true
            })
            this.hideForm();
            this.createCharacter();
        });
    }

    hideForm()
    {
        this.title.hide();
        this.input.hide();
        this.play.hide();
        this.maleButton.hide();
        this.femaleButton.hide();
    }

    createCharacter()
    {
        var player = createSprite(width/2, height-95, 200, 200);

        if(keyCode == 32)
        {
            player.setVelocity(0, 2);
            console.log("Hi.");
        }

        database.ref("Gender").on("value", function(data){
            playerGender = data.val();

            //console.log(playerGender);

            if(playerGender == 1)
            {
                //console.log("Male");

                player.addImage(boyImg);
                player.scale=0.4;
            }

            if(playerGender == 2)
            {
                //console.log("Female");

                player.addImage(girlImg);
                player.scale=0.8;
            }

            //console.log(player);
        });
    }

    spawnPlatform()
    {
        var platform = createSprite(Math.round(random(70, width-70)), -5, 20, 8);
        platform.addImage(platformImg);

        //platform.velocityY=3;
        platform.setVelocity(0, 2);

        platformGroup.add(platform);

        //console.log(platform);
    }

    // playerJump()
    // {
    //     if(keyIsDown("space") && player.y <= height-95)
    //     {
    //         player.velocityY = -10;
    //     }

    //     player.velocityY += 0.8;

    //     player.collide(ground);
    // }

    // spawnObstacles()
    // {
    //   if (frameCount % 200 === 0){
        
    //      var rand = Math.round(random(1,2));
    //      switch(rand) {
    //        case 1: 
    //                break;
    //        case 2: 
    //                break;
    //        default: break;
    //      }
            
    //      .lifetime = 100;
    //   }
    // }
}