function thePyramidOfKingDjoser(size, height) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 0;
    let breakIt = false;
    let totalHeight = 0;
    let totalStone = 0;

    while(size >= 0) {
        steps++;
        let calcStone = (size - 2) * (size - 2);
        stone = calcStone * height;
        if(size <= 2) {
            gold = Math.ceil(size * size * height);
            stone = 0;
            breakIt = true;
        }
        totalStone += stone;
        totalHeight += height;
        if(breakIt === true) {
            break;
        }
        let calcMarble = (size * size) - calcStone;

        if(steps >= 5) {
            lapis += calcMarble * height;
            calcMarble = 0;
            steps = 0;
        }
        marble += calcMarble * height;

        size -= 2;
    }
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);
}

thePyramidOfKingDjoser(11, 1)