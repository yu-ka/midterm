(function(){
  describe("clasifyInt", function(){
    context("偶数が引数に指定された時", function(){
      const a = 0;
      const b = 2;
      const c = -2;
      const d = 10;

      const even = "偶数";

      it(`"${even}" を返す`, function(){
        expect(classifyInt(a)).to.be(even);
        expect(classifyInt(b)).to.be(even);
        expect(classifyInt(c)).to.be(even);
        expect(classifyInt(d)).to.be(even);
      });
    });

    context("奇数が引数に指定された時", function(){
      const a = 1;
      const b = -3;
      const odd = "奇数";

      it(`"${odd}" を返す`, function(){
        expect(classifyInt(a)).to.be(odd);
        expect(classifyInt(b)).to.be(odd);
      });
    });
  });

})();
