var canvas= new fabric.canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object ="";
var block_image_object= "";
 
function player_update()
{
    fabric.image.fromURL("player.png", function(Img)) {
        player_object= Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(player_object);

        });
    }
function new_image(get_image)
{
    fabric.image.fromURL(get_image, function(Img)) {
    block_image_object= Img;

       block_image_object.scaleToWidth(150);
       block_image_object.scaleToHeight(140);
        block_image_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(block_image_object);

        });
}
}
