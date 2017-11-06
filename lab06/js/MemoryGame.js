function MemoryGame(){
    var board = $('#GameBoard');
    var timeDisp = $('#Timer');
    var cards;
    var gameCards;
    var gameTime;
    var gameTimer;
    var actionTimer;
    $.getJSON('/json/CardDef.json', function(data){cards = data});

    this.NewGame = function(numMatches, boardID)
    {
        gameCards=[];
        gameTime = 0;
        gameTimer = setInterval(function(){gameTime++; timeDisp.html(gameTime);},1000);

        gameCards = cards + cards;
        debugger
        for(var i = 0; i < numMatches; i++){
        gameCards.push(cards[i]);
        gameCards.push(cards[i]);
        }
        for(var i = 0; i < gameCards; i++){
            board.append('<li><div class="card" data-name="'+ gameCards[i].name + '"></div></li>');
    }
    }
        
}