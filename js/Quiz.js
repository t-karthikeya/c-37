class Quiz {
  constructor(){

  }

  getState(){
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value",function(data){
          gameState = data.val();
      })
  }

  updateState(state){
      database.ref('/').update({
          gameState : state
      })
  }

  async start(){
      if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref("contestantCount").once("value");
          if(contestantCountRef.exists()){
              contestantCount = contestantCountRef.val();
              contestant.getCount();
          }

          question = new Question();
          question.display();

      }
  }

  play(){
      background("lightblue");
      question.hide();
      contestant.getContestantInfo();

      var title1 = createElement('h1');
      title1.html("Result of the Quiz");
      title1.position(530,20);

      if(allContestants !== undefined){

          textSize(30);
          fill("black");
          text("NOTE : The Contestants with the correct answer are highlighted in green colour..", 150, 200);
          var display_position = 250;
          var correctAnswer = "c";
          for(var con in allContestants){
              if(correctAnswer===allContestants[con].answer)
                  fill("green");
              else
                  fill("black")
              
              display_position+=40;
              textSize(20);
              text(allContestants[con].name + " : " + allContestants[con].answer, 120, display_position);
          }

      }
      
  }
}