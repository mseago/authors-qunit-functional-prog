'use strict';
if (this.QUnitPractice === undefined) this.QUnitPractice = {};

(function(context) {

function arabicAuthorsCount(authors) {
  var arabicAuthors = authors.filter(function(author) {
    return author.language === 'Arabic';
  });
  return arabicAuthors.length;
}

  function englishAuthorsCount(authors) {
    var englishAuthors = authors.filter(function(author){
      return author.language === 'English';
    });
    return englishAuthors.length;
  }

  function russianAuthorsCount(authors) {
    var russianAuthors = authors.filter(function(author) {
      return author.language === 'Russian';
    });
    return russianAuthors.length;
  }

  function authorsPublishedOver500(authors) {
    var authorsMoreThan500 = authors.filter(function(author) {
      return author.publishedWorks > 500;
    });
    return authorsMoreThan500.length;
  }

  function authorMostPublishedWorks(authors) {
    var mostWorks = authors[0];
    authors.forEach(function(author) {
      if (author.publishedWorks > mostWorks.publishedWorks) {
        mostWorks = author;
      }
    });
    return mostWorks.name;
  }

  function nameBeginsWithA(authors) {
    var beginsWithA = authors.filter(function(author){
      var firstNameA = author.name.indexOf('A') === 0;
      return firstNameA;
    });
    return beginsWithA.length;
  }

  function nameBeginsWithK(authors) {
    var beginsWithK = authors.filter(function(author){
      var kNames = author.name.indexOf('K') === 0;
      return kNames;
    });
    return beginsWithK.length;
  }


  function avgPublishedWorks(authors) {
    var sum = 0;
    authors.forEach(function(author, i) {
      sum += author.publishedWorks;
    })
    var avg = sum/authors.length;
    avg = Math.round(avg);
    return avg;
  }

  function avgPublishedWorksByEnglish(authors) {
    var isEnglish = function(author) {
      return author.language === "English";
    }
    var englishAuthors = authors.filter(isEnglish);
    var sum = 0;
    englishAuthors.forEach(function(val, i) {
      sum += englishAuthors[i].publishedWorks;
    });
    var avg = sum/englishAuthors.length;
    avg = Math.floor(avg);
    return avg;
  }

  function avgPublishedWorksInJapanese(author) {
    var isJapanese = function(author) {
      return author.language === "Japanese";
    }
    var japaneseAuthors = authors.filter(isJapanese);
    var sum = 0;
    japaneseAuthors.forEach(function(val, i) {
      sum += japaneseAuthors[i].publishedWorks;
    });
    var avg = sum/japaneseAuthors.length;
    avg = Math.floor(avg);
    return avg;
  }

  context.arabicAuthorsCount = arabicAuthorsCount;
  context.englishAuthorsCount = englishAuthorsCount;
  context.russianAuthorsCount = russianAuthorsCount;
  context.authorsPublishedOver500 = authorsPublishedOver500;
  context.authorMostPublishedWorks = authorMostPublishedWorks;
  context.nameBeginsWithA = nameBeginsWithA;
  context.nameBeginsWithK = nameBeginsWithK;
  context.avgPublishedWorks = avgPublishedWorks;
  context.avgPublishedWorksByEnglish = avgPublishedWorksByEnglish;
  context.avgPublishedWorksInJapanese = avgPublishedWorksInJapanese;

})(window.QUnitPractice);
