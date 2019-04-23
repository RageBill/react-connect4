import {Player, SlotState} from "../../../../type/type";

export class WinChecker {
    static checkWinner(data: SlotState[][], currentPlayer: Player, currentColIndex: number, currentPosIndex: number): boolean {
        // Check for vertical
        const verticalSlots: number[] = data[currentColIndex].map(slot => ((slot as number) === (currentPlayer as number) ? 1 : 0));
        for (let i = 0; i < 3; i++) {
            if (verticalSlots.slice(i, i + 4).reduce((total, num) => total + num) === 4) {
                return true;
            }
        }

        // Check for horizontal
        const dataByCurrentPosIndex: SlotState[] = [];
        data.forEach(column => dataByCurrentPosIndex.push(column[currentPosIndex]));
        const horizontalSlots: number[] = dataByCurrentPosIndex.map(slot => ((slot as number) === (currentPlayer as number) ? 1 : 0));
        for (let i = 0; i < 4; i++) {
            if (horizontalSlots.slice(i, i + 4).reduce((total, num) => total + num) === 4) {
                return true;
            }
        }

        // Check for slanting

        // Check for entries in the two slanting lines
        const leftTop = {col: currentColIndex, pos: currentPosIndex};
        const rightBot = {col: currentColIndex, pos: currentPosIndex};
        const leftBot = {col: currentColIndex, pos: currentPosIndex};
        const rightTop = {col: currentColIndex, pos: currentPosIndex};

        let fixedTop = false;
        let fixedBot = false;
        let i = currentColIndex;
        while (i > 0) {
            i -= 1;

            if (leftTop.pos - 1 >= 0 && !fixedTop) {
                leftTop.col = i;
                leftTop.pos -= 1;
            } else {
                fixedTop = true;
            }

            if (leftBot.pos + 1 <= 5 && !fixedBot) {
                leftBot.col = i;
                leftBot.pos += 1;
            } else {
                fixedBot = true;
            }
        }

        fixedTop = false;
        fixedBot = false;
        i = currentColIndex;
        while (i < 6) {
            i += 1;

            if (rightTop.pos - 1 >= 0 && !fixedTop) {
                rightTop.col = i;
                rightTop.pos -= 1;
            } else {
                fixedTop = true;
            }

            if (rightBot.pos + 1 <= 5 && !fixedBot) {
                rightBot.col = i;
                rightBot.pos += 1;
            } else {
                fixedBot = true;
            }
        }

        let line1: SlotState[] = [];
        for (let i = 0; i <= rightBot.col - leftTop.col; i++) {
            line1.push(data[leftTop.col + i][leftTop.pos + i]);
        }
        let line2: SlotState[] = [];
        for (let i = 0; i <= rightTop.col - leftBot.col; i++) {
            line2.push(data[leftBot.col + i][leftBot.pos - i]);
        }
        line1 = line1.map(slot => ((slot as number) === (currentPlayer as number) ? 1 : 0));
        line2 = line2.map(slot => ((slot as number) === (currentPlayer as number) ? 1 : 0));

        // Check for the two slanting lines
        if (line1.length >= 4) {
            for (let i = 0; i <= line1.length - 4; i++) {
                if (line1.slice(i, i + 4).reduce((total, num) => total + num) === 4) {
                    return true;
                }
            }
        }
        if (line2.length >= 4) {
            for (let i = 0; i <= line2.length - 4; i++) {
                if (line2.slice(i, i + 4).reduce((total, num) => total + num) === 4) {
                    return true;
                }
            }
        }
        return false;
    }
}
