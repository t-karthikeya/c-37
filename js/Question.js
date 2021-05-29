class Question{
  constructor(){
      this.title = createElement('h1');
      this.question = createElement('h3');
      this.optionA = createElement('h4');
      this.optionB = createElement('h4');
      this.optionC = createElement('h4');
      this.optionD = createElement('h4');
      this.button = createButton("SUBMIT");
      this.input = createInput("NAME");
      this.input1 = createInput("Answer");

  }

  hide(){
      this.title.hide();
      this.button.hide();
      this.input.hide();
      this.question.hide();
      this.optionA.hide();
      this.optionB.hide();
      this.optionC.hide();
      this.optionD.hide();
      this.input1.hide();
  }

  answer(){
      if(this.input1 === C){
          
      }
  }

  display(){
      
      
      this.title.html("My QUIZ Game");
      this.title.position(530,20);

      this.question.html("Name the place where tomorrow comes before yesterday.");
      this.question.position(40,150);

      this.optionA.html("a) U.S.A.");
      this.optionA.position(40,250);
      
      this.optionB.html("b) India");
      this.optionB.position(40,300);

      this.optionC.html("c) Dictionary");
      this.optionC.position(40,350);

      this.optionD.html("d) China");
      this.optionD.position(40,400);

      this.button.position(555,550);
      this.input.position(400,500);
      this.input1.position(600,500);

      this.button.mousePressed(()=>{
          this.button.hide();
          this.input.hide();
          this.question.hide();
          this.optionA.hide();
          this.optionB.hide();
          this.optionC.hide();
          this.optionD.hide();
          this.input1.hide();
          this.title.hide();

          contestant.name = this.input.value();
          contestant.answer = this.input1.value();

          contestantCount+=1;
          contestant.index = contestantCount;
          contestant.update();
          contestant.updateCount(contestantCount)

      })
  }
}