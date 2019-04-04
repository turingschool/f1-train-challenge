var assert = require('chai').assert;
var Train = require('./train')

describe('Train', function() {
  it.skip('should be a function', function(){
    assert.isFunction(Train);
  });

  it.skip('should create a train', function() {
    var train = new Train();
        
    assert.isObject(train);
  });

  it.skip('should have a name and no passengers by default', function() {
    var train1 = new Train('Orient Express');
    var train2 = new Train('Trans-Siberian Express');

    assert.equal(train1.name, 'Orient Express');
    assert.equal(train2.name, 'Trans-Siberian Express');
    assert.deepEqual(train1.passengers, []);
    assert.deepEqual(train2.passengers, []);
  });

  it.skip('should be able to have passengers at the beginning of the ride', function() {
    var train1 = new Train('Orient Express', ['Louisa', 'Travis', 'Khalid']);
    var train2 = new Train('Trans-Siberian Express', ['Pam', 'Robbie']);

    assert.deepEqual(train1.passengers, ['Louisa', 'Travis', 'Khalid']);

    assert.deepEqual(train2.passengers, ['Pam', 'Robbie']);
  });

  it.skip('should have a number of seats available', function(){
    var train1 = new Train('Denver Light Rail', [], 100);
    var train2 = new Train('Orient Express', ['Louisa', 'Travis', 'Khalid'], 60);
    var train3 = new Train('Trans-Siberian Express', ['Pam', 'Robbie'], 120);

   assert.equal(train1.seatsAvailable, 100);
   assert.equal(train2.seatsAvailable, 57);
   assert.equal(train3.seatsAvailable, 118);
  });

  it.skip('should be able to pick up passengers', function() {
    var train = new Train('Denver Light Rail', ['Louisa', 'Travis', 'Khalid']);

    var pepsiCenter = { boarding: ['Robbie', 'David', 'Will'] };

    train.stopAtStation(pepsiCenter);

    assert.equal(train.passengers.length, 6);
    assert.deepEqual(train.passengers, [
      'Louisa',
      'Travis',
      'Khalid',
      'Robbie',
      'David',
      'Will'
    ]);
  });

  it.skip('should be able to drop off passengers', function() {
    var train = new Train('Denver Light Rail', ['Louisa', 'Travis', 'Khalid']);

    var pepsiCenter = { boarding: ['Christie', 'Brittany', 'Leta'] };

    train.stopAtStation(pepsiCenter, true);

    assert.deepEqual(train.passengers, []);
    assert.deepEqual(pepsiCenter.boarding, [
      'Christie',
      'Brittany',
      'Leta',
      'Louisa',
      'Travis',
      'Khalid'
    ]);
  });
})