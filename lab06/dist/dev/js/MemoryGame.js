function MemoryGame(){
    var board = $('#GameBoard');
    var timeDisp = $('#Timer');
    var cards;
    var gameCards;
    var gameTime;
    var gameTimer;
    var actionTimer;
    var highScore;
     
    $.getJSON('/json/CardDef.json', function(data){cards = data});

    this.NewGame = function(numMatches, boardID)
    {
        board = $('#' + boardID);
        gameCards=[];
        gameTime = 0;
        if(numMatches > 10){ alert('invalid number of matches'); return 0;}
        clearInterval(gameTimer);
        gameTimer = setInterval(function(){timeDisp.html(++gameTime);},1000);
        board.html("");
        for(var i = 0; i < numMatches; i++)
        {
        gameCards.push(cards[i]);
        gameCards.push(cards[i]);
        }
        shuffle(gameCards);
        for(var i = 0; i < gameCards.length; i++)
        {
            board.append('<li><div class="card" data-url="'+ gameCards[i].url +'" data-name="'+ gameCards[i].name + '"></div></li>');
        }
        board.find('.card').click(CardClick);
    }
    var CardClick = function()
    {
        if(board.find('.flipped').length == 2){return;}
        if($(this).hasClass('flipped')){

        }
        else
        {
            $(this).slideToggle('fast',function(){
                $(this).addClass('flipped');
                $(this).css('background-image', 'url('+$(this).data('url')+')');

            $(this).slideToggle('fast', function(){
                if(board.find('.flipped').length == 2)
                {
                    if(board.find('.flipped').eq(0).data('name') === board.find('.flipped').eq(1).data('name'))
                    {
                        board.find('.flipped').addClass('matched').removeClass('flipped');
                    }
                    else
                    {
                        actionTimer = setTimeout(function(){
                            board.find('.flipped').removeClass('flipped').css('background-image', 'url(/img/Animemory.png)');
                        }, 1000);  
                    }
                }
                if(board.find('.matched').length == gameCards.length)
                {
                    actionTimer = setTimeout(function(){
                        var winTime = gameTime;
                        clearInterval(gameTimer);
                        alert('winner!!!!!');
                        var Player = prompt('Enter Your Name: ','Player');
                    }, 500); 
                }
            });
            });
        }
    }
         
};
$(document).ready(function(){
    var memGame = new MemoryGame();
    document.getElementById('ngButton').onclick = function(){ memGame.NewGame(2, "GameBoard"); };
});