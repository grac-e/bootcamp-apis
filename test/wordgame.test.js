import assert from "assert";
import { longestWord, shortestWord, wordLengths } from "../wordgame.js";

describe('The wordGame test', function () {

    it('should find the shortest word, longest word and total length of a sentence.', function () {
        assert.equal('shipyard', longestWord('The dog jumped over the shipyard fence'), "longestWord failing...");
        assert.equal('barked', longestWord('The yellow dog barked loud'), "longestWord failing...");

        assert.equal('the', shortestWord('The dog jumped over the shipyard fence'), "shortestWord failing...");
        assert.equal('up', shortestWord('The dog barked loudly at the cat up the tree'), "shortestWord failing...");

        assert.equal(32, wordLengths('The dog jumped over the shipyard fence'), "wordLengths is failing...");
        assert.equal(18, wordLengths('The dog barked loudly'), "wordLengths failing...");
    });
});