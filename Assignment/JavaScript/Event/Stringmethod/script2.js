
     
        let courseMessage = "HTML is easy to learn. HTML is used to create web pages.";

        console.log("Original Message:", courseMessage);


        let firstReplace = courseMessage.replace("HTML", "JavaScript");
        console.log("After replace():", firstReplace);

        let allReplace = courseMessage.replaceAll("HTML", "JavaScript");
        console.log("After replaceAll():", allReplace);

      
        console.log("Uppercase:", courseMessage.toUpperCase());
        console.log("Lowercase:", courseMessage.toLowerCase());


        let greeting = "Welcome to ";
        let studentGroup = "RICR Students";

        let combinedMessage = greeting.concat(studentGroup);
        console.log("Combined Message:", combinedMessage);


        let separator = "*".repeat(5);
        console.log("Separator:", separator);

        let courses = "HTML,CSS,JavaScript,React";
        let courseArray = courses.split(",");

        console.log("Original Courses:", courses);
        console.log("Course Array:", courseArray);


        let sentence = "Learn JavaScript with RICR";
        let wordArray = sentence.split(" ");

        console.log("Original Sentence:", sentence);
        console.log("Word Array:", wordArray);


        let startText = "   Welcome to RICR";
        console.log("Original Start Text:", JSON.stringify(startText));
        console.log("After trimStart():", JSON.stringify(startText.trimStart()));

      
        let endText = "Welcome to RICR   ";
        console.log("Original End Text:", JSON.stringify(endText));
        console.log("After trimEnd():", JSON.stringify(endText.trimEnd()));

     
        console.log("Original Message After All Operations:", courseMessage);