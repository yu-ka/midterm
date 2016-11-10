(function(){

  describe("gcd", function(){

    context("gcd(1, 1) の場合", function(){
      it("1を返す", function(){
        expect(gcd(1, 1)).to.be(1);
      });
    });

    context("片方の引数が 1 の場合", function(){
      it("1を返す", function(){
        expect(gcd(1, 130)).to.be(1);
      });
    });

    context("2つの引数が同じ数の場合", function(){
      it("その数を返す", function(){
        expect(gcd(130, 130)).to.be(130);
      });
    });    

    context("それ以外の場合", function(){
      it("２つの数の最大公約数を返す", function(){
        expect(gcd(12, 16)).to.be(4);        
      })
    });
 
  });

})();
