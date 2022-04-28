class FizzbuzzService{
    
    static  applyValidationInExplorer(explorer, score){
        if(score%5 === 0 && score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }if(score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }if(score%3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }else{
            explorer.trick = score;
            return explorer;
        }
    };

}

module.export=FizzbuzzService