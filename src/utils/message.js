
//error if it have a word that longer than maxLength
const errorMaxLength = (maxLength) => {
    return `It have a word that longer than ${maxLength} characters`;
}
//error if it have a word that add to indicator is longer than maxLength
const errorWordAndIndicatorMaxLength = (maxLength) => {
    return `Can not split this message because it have a word `
                    + `that add to the indicator is longer than ${maxLength} characters`;
}

export default {

    //if it split successfully, it will return an array
    //if not, it will return an error string
    splitMessage: function (message, maxLength = 50) {

        //return if input is less than or equal to 50 characters
        if (message.length <= maxLength) {
            return [message];
        }


        //If the message contains a span of non-whitespace characters longer than 50 characters, throw an error
        let wordArr = message.split(" ");
        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i].length > maxLength) {
                return errorMaxLength(maxLength)
            }
        }


        //If a user's input is greater than 50 characters, split it into chunks that each is less than or equal to 50 characters
        let numOfChunk = Math.round(message.length / (maxLength - 3));
        let chunkInIndicatorLength = (numOfChunk + "").length;

        let messageArr = [""];
        for (let i = 0; i < wordArr.length; i++) {

            //plus 2 is / and first space
            if ((messageArr.length + "").length + 2 + chunkInIndicatorLength + wordArr[i].length > maxLength) {
                return errorWordAndIndicatorMaxLength(maxLength);
            }

            //check to add new chunk
            if ((messageArr.length + "").length + 2 + chunkInIndicatorLength + wordArr[i].length
                + messageArr[messageArr.length - 1].length
                > maxLength) {

                //check if chunkInIndicatorLength are predict wrong
                if ((messageArr.length + "").length > chunkInIndicatorLength) {
                    chunkInIndicatorLength++;
                    i = -1;
                    messageArr = [""];
                    continue;
                }
                i--;
                messageArr.push("")
            } else {
                messageArr[messageArr.length - 1] += " " + wordArr[i];
            }
        }

        for (let i = 0; i < messageArr.length; i++) {
            messageArr[i] = (i + 1) + "/" + messageArr.length + messageArr[i]
        }

        return messageArr;

    },

}
