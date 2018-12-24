

export default {
    splitMessage: function (message, maxLength = 50) {

        //return if input is less than or equal to 50 characters
        if (message.length <= maxLength) {
            return [message];
        }

        //If the message contains a span of non-whitespace characters longer than 50 characters, throw an error
        let wordArr = message.split(" ");
        for (let i = 0; i < wordArr.length; i++) {
            if (wordArr[i].length > maxLength) {
                throw new Error(`It have a word that longer than ${maxLength} characters`);
            }
        }


        //If a user's input is greater than 50 characters, split it into chunks that each is less than or equal to 50 characters
        //todo: ...

    },

}
