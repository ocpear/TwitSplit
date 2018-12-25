import message from "./message";


const testCases = [
    {
        in:"The product Tweeter allows users to post short messages limited to 50 characters each.",
        out:["1/2 The product Tweeter allows users to post short", "2/2 messages limited to 50 characters each."],
    },
    {
        in:"Sometimes, users get excited and write messages longer than 50 characters.",
        out:["1/2 Sometimes, users get excited and write", "2/2 messages longer than 50 characters."],
    },
    {
        in:"Instead of rejecting these messages, we would like to add a new feature that will split the message into parts and send multiple messages on the user's behalf, all of them meeting the 50 character requirement.",
        out:["1/5 Instead of rejecting these messages, we would", "2/5 like to add a new feature that will split the", "3/5 message into parts and send multiple messages", "4/5 on the user's behalf, all of them meeting the", "5/5 50 character requirement."]
    },
    {
        in:"I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.",
        out:["1/2 I can't believe Tweeter now supports chunking", "2/2 my messages, so I don't have to do it myself."],
    },
    {
        in:"We want to see how you create a new project and what technologies you decide to you use. A good project will be cleanly structured, will only contain the dependencies it needs, and will be well-documented and well-tested. What matters is not the technologies you use, but the reasons for your decisions. Bonus points will be given for demonstrating knowledge of modern Javascript techniques and best practices.",
        out:["1/10 We want to see how you create a new project", "2/10 and what technologies you decide to you use. A", "3/10 good project will be cleanly structured, will", "4/10 only contain the dependencies it needs, and", "5/10 will be well-documented and well-tested. What", "6/10 matters is not the technologies you use, but", "7/10 the reasons for your decisions. Bonus points", "8/10 will be given for demonstrating knowledge of", "9/10 modern Javascript techniques and best", "10/10 practices."]
    },
    {
        in:"1234567890123456789012345678901234567890123456789 1234567890123456789012345678901234567890123456789",
        out:"Can not split this message because it have a word that add to the indicator is longer than 50 characters",
    },
    {
        in:"12345678901234567890123456789012345678901234567890123",
        out:"It have a word that longer than 50 characters",
    },
    {
        in:`Split messages will have a "part indicator" appended to the beginning of each section. In the example above, the message  was split into two chunks, so the part indicators read "1/2" and "2/2". Be aware that these count toward the character limit.`,
        out:[`1/6 Split messages will have a "part indicator"`, `2/6 appended to the beginning of each section. In`, `3/6 the example above, the message  was split into`, `4/6 two chunks, so the part indicators read "1/2"`, `5/6 and "2/2". Be aware that these count toward`, `6/6 the character limit.`],
    }
]

it('split message', () => {
    testCases.forEach(testCase => {
        expect(message.splitMessage(testCase.in)).toEqual(testCase.out); 
    });
});