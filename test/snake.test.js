import Snake from '../src/snake/Snake.js';

test('isHitTrailIndex', () => {
    const snake = new Snake(10, 10, 'green');
    expect(snake.isHitTrailIndex({x:2.99, y: 4}, 3, 4)).toBe(true);
    expect(snake.isHitTrailIndex({x:2.99, y: 4}, 3, 5)).toBe(false);
});

test('getColor', () => {
    const snake = new Snake(10, 10, 'blue');
    expect(snake.getColor()).toBe('blue');
});

test('isHitTrail', () => {
    const snake = new Snake(10, 10, 'green');

    // only 1 trail
    expect(snake.isHitTrail([{x:2.99, y: 4}], 3, 4)).toBe(false);

    expect(snake.isHitTrail([{x:3, y: 4}, {x:2.99, y: 4}], 3, 4)).toBe(true);
});

test('getNewHeadPosition, go up then stuck at the ceiling', () => {
    const snake = new Snake(10, 10, 'green', 100, 100);
    expect(snake.getNewHeadPosition(0, -10)).toEqual({x:0, y:90});
});

test('getNewHeadPosition, go left then stuck', () => {
    const snake = new Snake(10, 10, 'green', 100, 100);
    expect(snake.getNewHeadPosition(-10, 0)).toEqual({x:90, y:0});
});

test('getNewHeadPosition, go bottom then stuck', () => {
    const snake = new Snake(10, 10, 'green', 100, 100);
    snake.setPosition(0, 90);
    expect(snake.getNewHeadPosition(0, 10)).toEqual({x:0, y:0});
});

test('getNewHeadPosition, go right then stuck', () => {
    const snake = new Snake(10, 10, 'green', 100, 100);
    snake.setPosition(90, 0);
    expect(snake.getNewHeadPosition(10, 0)).toEqual({x:0, y:0});
});

test('getNewHeadPosition, position middle then do circle move', () => {
    const snake = new Snake(10, 10, 'green', 100, 100);
    snake.setPosition(50, 50);

    // up
    expect(snake.getNewHeadPosition(0, -10)).toEqual({x:50, y:40});

    // left
    expect(snake.getNewHeadPosition(-10, 0)).toEqual({x:40, y:40});

    // down
    expect(snake.getNewHeadPosition(0, 10)).toEqual({x:40, y:50});

    // right
    expect(snake.getNewHeadPosition(10, 0)).toEqual({x:50, y:50});
});

test('move', () => {
    const snake = new Snake(10, 10, 'green', 100, 100);

    // only 1 trail
    expect(snake.move()).toEqual([{x:0, y:0}]);

    // go up
    snake.goUp();
    // eat the food
    expect(snake.move(true)).toEqual([{x:0, y:90}, {x:0, y:0}]);
    // still go up
    expect(snake.move()).toEqual([{x:0, y:80}, {x:0, y:90}]);
    // go right
    snake.goRight();
    // eat the food
    expect(snake.move(true)).toEqual([{x:10, y:80}, {x:0, y:80}, {x:0, y:90}]);
    // still go right
    expect(snake.move()).toEqual([{x:20, y:80}, {x:10, y:80}, {x:0, y:80}]);
    // go down
    snake.goDown();
    // eat the food
    expect(snake.move(true)).toEqual([{x:20, y:90}, {x:20, y:80}, {x:10, y:80}, {x:0, y:80}]);
    // still go down
    expect(snake.move()).toEqual([{x:20, y:0}, {x:20, y:90}, {x:20, y:80}, {x:10, y:80}]);
    // go left
    snake.goLeft();
    // eat the food
    expect(snake.move(true)).toEqual([{x:10, y:0}, {x:20, y:0}, {x:20, y:90}, {x:20, y:80}, {x:10, y:80}]);
    // still go left
    expect(snake.move()).toEqual([{x:0, y:0}, {x:10, y:0}, {x:20, y:0}, {x:20, y:90}, {x:20, y:80}]);
});